const Contact = require('../models/contactModel');

// @desc    Create a new contact
// @route   POST /api/contacts
// @access  Public
const createContact = async (req, res) => {
    try {
        const { name, phone, vehicleModel, RegistrationNumber, contactMethod , dateTime} = req.body;

        const contact = new Contact({
            name,
            phone,
            vehicleModel,
            RegistrationNumber,
            contactMethod,
            dateTime,
        });

        await contact.save();

        res.status(201).json({ message: 'Contact saved successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// @desc    Get all contacts
// @route   GET /api/contacts
// @access  Public
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createContact, getContacts };
