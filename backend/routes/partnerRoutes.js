const express = require('express');
const { addPartner, upload, getPartners } = require('../controllers/partnerController');
const router = express.Router();

// POST - Add a partner with file upload
router.post('/add',addPartner); // 'certifications' is the field name for file upload

// GET - Retrieve all partners
router.get('/', getPartners);

module.exports = router;
