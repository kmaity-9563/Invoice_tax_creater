const mongoose = require('mongoose');

const taxSchema = new mongoose.Schema({
    userId: { type: String },
    taxName: { type: String },
    taxRate: { type: Number }
});

const Tax = mongoose.model('Tax', taxSchema);

module.exports = Tax;
