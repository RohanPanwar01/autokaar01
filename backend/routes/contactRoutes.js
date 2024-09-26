const express = require('express');
const { createContact, getContacts } = require('../controllers/contactController');

const router = express.Router();

router.route('/')
    .post(createContact)   // POST /api/contacts
    .get(getContacts);     // GET /api/contacts

module.exports = router;
