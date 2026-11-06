import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
      minlength: [1, "Name cannot be empty."],
      maxlength: [100, "Name cannot exceed 100 characters."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address."],
      maxlength: [255, "Email cannot exceed 255 characters."],
    },
    message: {
      type: String,
      required: [true, "Message is required."],
      trim: true,
      minlength: [1, "Message cannot be empty."],
      maxlength: [2000, "Message cannot exceed 2000 characters."],
    },
    ipAddress: {
      type: String,
      default: null,
    },
    userAgent: {
      type: String,
      default: null,
    },
    submittedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);
