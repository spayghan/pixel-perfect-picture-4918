import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB().catch((err) => {
  console.warn("[Warning] MongoDB not connected at launch:", err.message);
});

// Routes
app.use("/api/contact", contactRoutes);

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    service: "Shashvat Payghan Portfolio Backend API",
  });
});

const server = app.listen(PORT, () => {
  console.log(`[Backend] Express API running on port ${PORT}`);
  console.log(`[Backend] Contact endpoint: http://localhost:${PORT}/api/contact`);
});

export default app;
export { server };
