import { Contact } from "../models/Contact.js";
import { connectDB } from "../config/db.js";

// Rate limiting tracker for spam prevention
const submissionLog = new Map();

function isRateLimited(ip) {
  if (!ip) return false;
  const now = Date.now();
  const history = submissionLog.get(ip) || [];
  const recent = history.filter((time) => now - time < 60000);
  if (recent.length >= 5) {
    return true;
  }
  recent.push(now);
  submissionLog.set(ip, recent);
  return false;
}

export async function submitContact(req, res) {
  try {
    const clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";

    // 1. Rate limiting spam check
    if (isRateLimited(clientIp)) {
      return res.status(429).json({
        success: false,
        error: "Too many messages sent. Please wait a minute before trying again.",
      });
    }

    const { name, email, message, _honey } = req.body;

    // 2. Honeypot check (catches automated spam bots)
    if (_honey && _honey.trim().length > 0) {
      console.warn(`[Spam Blocked] Honeypot triggered by IP ${clientIp}`);
      return res.status(200).json({
        success: true,
        message: "Message processed successfully.",
      });
    }

    // 3. Validation: Required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        success: false,
        error: "Name is required and cannot be empty.",
      });
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return res.status(400).json({
        success: false,
        error: "Email is required and cannot be empty.",
      });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        success: false,
        error: "Message is required and cannot be empty.",
      });
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedMessage = message.trim();

    // 4. Validation: Length boundaries
    if (trimmedName.length > 100) {
      return res.status(400).json({
        success: false,
        error: "Name cannot exceed 100 characters.",
      });
    }

    if (trimmedEmail.length > 255) {
      return res.status(400).json({
        success: false,
        error: "Email cannot exceed 255 characters.",
      });
    }

    if (trimmedMessage.length > 2000) {
      return res.status(400).json({
        success: false,
        error: "Message cannot exceed 2000 characters.",
      });
    }

    // 5. Validation: Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address.",
      });
    }

    // 6. Connect to MongoDB
    try {
      await connectDB();
    } catch (dbError) {
      console.error("[Database Error] Could not connect to MongoDB:", dbError.message);
      return res.status(503).json({
        success: false,
        error: "Database connection failed. Please check that MongoDB is running and MONGODB_URI is correctly configured.",
        details: dbError.message,
      });
    }

    // 7. Store document in MongoDB
    const newContact = await Contact.create({
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
      ipAddress: clientIp,
      userAgent: req.headers["user-agent"] || "unknown",
      submittedAt: new Date(),
    });

    console.log(`[Contact Saved] ID: ${newContact._id} | From: ${trimmedName} (${trimmedEmail})`);

    return res.status(201).json({
      success: true,
      message: "Your message was transmitted and saved to MongoDB successfully.",
      data: {
        id: newContact._id,
        name: newContact.name,
        email: newContact.email,
        submittedAt: newContact.submittedAt,
      },
    });
  } catch (error) {
    console.error("[Server Error] Contact submission failed:", error);
    return res.status(500).json({
      success: false,
      error: "An unexpected error occurred while processing your message.",
      details: error.message,
    });
  }
}

export async function getContacts(_req, res) {
  try {
    await connectDB();
    const contacts = await Contact.find().sort({ submittedAt: -1 }).limit(50);
    res.json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to retrieve contacts from database.",
      details: error.message,
    });
  }
}
