const express = require('express');
const Inventory = require('../models/Inventory');
const router = express.Router();

router.get('/', async (req, res) => {
  const inventory = await Inventory.find();
  res.json(inventory);
});

router.post('/', async (req, res) => {
  const newItem = new Inventory(req.body);
  await newItem.save();
  res.json(newItem);
});

module.exports = router;