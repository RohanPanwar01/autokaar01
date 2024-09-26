// backend/models/Partner.js
const mongoose = require('mongoose');

const partnerSchema = mongoose.Schema({
  companyName: { type: String,},
  businessType: { type: String,},
  otherBusinessType: { type: String,},
  registeredAddress: { type: String,},
  city: { type: String,},
  state: { type: String,},
  postalCode: { type: String,},
  gstn: { type: String,},
  website: { type: String},
  yearEstablished: { type: Number,},
  numEmployees: { type: Number,},
  primaryContactName: { type: String,},
  primaryContactTitle: { type: String,},
  primaryContactEmail: { type: String,},
  primaryContactPhone: { type: Number,},
  altContactName: { type: String,},
  altContactTitle: { type: String,},
  altContactEmail: { type: String,},
  altContactPhone: { type: Number,},
  servicesOffered: { type: [String],},
  otherService: { type: String,},
  serviceArea: { type: String,},
  storeclosed: { type: String,},

 

  

  serviceTurnaround: { type: Number,},
  operatingHoursWeekdaysStart: { type: String,},
  operatingHoursWeekdaysEnd: { type: String,},
  operatingHoursWeekendsStart: { type: String,},
  operatingHoursWeekendsEnd: { type: String,},
  numServiceBays: { type: Number,},
  equipmentAvailable: { type: String,},
  certifications: { type: String,},
  partnershipGoals: { type: String,},
  additionalComments: { type: String,},
  signatoryName: { type: String,},
  signatoryTitle: { type: String,},
  signature: { type: String,},
  date: { type: Date,},
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;
