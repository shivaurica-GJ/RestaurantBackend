const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItem');

// GET all menu items
router.get('/', async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

// POST add new menu item
router.post('/', async (req, res) => {
  const { name, description, category, price, imageUrl } = req.body;
  const newItem = new MenuItem({ name, description, category, price, imageUrl });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: 'Could not save item' });
  }
});

module.exports = router;
