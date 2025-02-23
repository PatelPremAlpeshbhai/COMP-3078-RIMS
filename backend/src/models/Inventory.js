const mongoose = require('mongoose');
const inventorySchema = new mongoose.Schema({
  itemName: String,
  quantity: Number,
  price: Number,
  supplier: String,
});
module.exports = mongoose.model('Inventory', inventorySchema);