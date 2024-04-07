const mongoose = require("mongoose");

// Define mongoose schemas
const userSchema = new mongoose.Schema({
    userId: { type: String },
    taxName: { type: String },
    tax: { type: Number }
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
};
