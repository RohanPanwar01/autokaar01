const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

const partnerRoutes = require('./routes/partnerRoutes');

dotenv.config();

connectDB();


const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/contacts', contactRoutes);

app.use('/api/partners', partnerRoutes);

module.exports = app;  // <-- Make sure you are exporting the app
