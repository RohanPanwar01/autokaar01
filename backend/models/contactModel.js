const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    RegistrationNumber: { type: String, required: true },
    contactMethod: { type: String, enum: ['call', 'whatsapp'], required: true },
    dateTime: { type: String, },  // Custom dateTime field
}, {
    timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
