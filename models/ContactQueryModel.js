const mongoose = require("mongoose");

const contactQuerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
    default: "",
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["new", "in-progress", "resolved"],
    default: "new",
  },
});

module.exports = mongoose.model("ContactQuery", contactQuerySchema);
