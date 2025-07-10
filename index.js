const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// CORS configuration to allow frontend on port 3000
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );

app.use(cors({
  origin: "https://project1-sand-seven.vercel.app", // your frontend domain
  credentials: true
}));


// app.use(
//   cors({
//     origin: [
//       "http://localhost:3000",
//       "https://project1-sand-seven.vercel.app" // Add your real Vercel URL here
//     ],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization", "Accept"]
//   })
// );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = require("./config/db");
connectDB();

// Example route
app.get("/", (req, res) => {
  res.send("API running");
});

const menuRoutes = require("./routes/menu");
app.use("/api/menu", menuRoutes);

const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

const orderRoutes = require("./routes/order");
const authRoutes = require("./routes/auth");

app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);
