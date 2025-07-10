const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  price: Number,
  imageUrl: String
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
