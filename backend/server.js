const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const flightRoutes = require("./routes/flightRoutes");

const app = express();
app.use(cors());
app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

// Connect to Database
connectDB();

// Routes
app.use("/api/flights", flightRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
