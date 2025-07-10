const express = require("express");
const router = express.Router();
const ContactQuery = require("../models/ContactQueryModel");

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, email, and message are required fields",
    });
  }

  try {
    const newQuery = new ContactQuery({
      name,
      email,
      phone: phone || "", // Handle empty phone as empty string instead of null
      message,
    });

    await newQuery.save();

    console.log("New contact query saved:", { name, email, phone, message });

    res.status(201).json({
      message: "Query submitted successfully",
      success: true,
    });
  } catch (err) {
    console.error("Error saving contact query:", err);
    res.status(500).json({
      error: "Failed to submit query. Please try again.",
      success: false,
    });
  }
});

// Optional: GET route to fetch all contact queries (for admin)
router.get("/", async (req, res) => {
  try {
    const queries = await ContactQuery.find().sort({ submittedAt: -1 });
    res.json(queries);
  } catch (err) {
    console.error("Error fetching contact queries:", err);
    res.status(500).json({ error: "Failed to fetch queries" });
  }
});

module.exports = router;
