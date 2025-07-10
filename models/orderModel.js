const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [String], // ← change this from embedded object to string array
  totalAmount: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
