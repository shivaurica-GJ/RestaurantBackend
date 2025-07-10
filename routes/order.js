const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

router.post('/', async (req, res) => {
  const { items, totalAmount, customerName, customerEmail } = req.body;
  const order = new Order({ items, totalAmount, customerName, customerEmail });
  await order.save();
  res.json({ message: 'Order placed successfully' });
});

module.exports = router;
