const { User } = require("../db/index");

const saveUserTax = async (req, res) => {
    try {
        const { userId, taxName, tax } = req.body;
        const userTax = new User({ userId, taxName, tax });
        await userTax.save();
        res.status(201).json({ message: 'User tax details saved successfully' });
    } catch (error) {
        console.error('Error saving user tax details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    saveUserTax
};
