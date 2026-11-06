import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/portfolio";

let isConnecting = false;

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  if (isConnecting) {
    return;
  }

  try {
    isConnecting = true;
    console.log(`[Database] Connecting to MongoDB...`);
    const conn = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[Database] MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`);
    return conn.connection;
  } catch (error) {
    console.error(`[Database] MongoDB connection error:`, error.message);
    throw error;
  } finally {
    isConnecting = false;
  }
}
