const Partner = require('../models/Partner');

// POST - Add a new partner
const addPartner = async (req, res) => {
  try {
    const partner = new Partner(req.body);
    const savedPartner = await partner.save();
    res.status(201).json(savedPartner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET - Retrieve all partners
const getPartners = async (req, res) => {
  try {
    const partners = await Partner.find();
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addPartner, getPartners };
