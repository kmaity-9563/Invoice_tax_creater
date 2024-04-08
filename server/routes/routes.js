const express = require('express');
const router = express.Router();
const Tax = require('../db/index'); 

router.get('/', async (req, res) => {
    try {
        const taxes = await Tax.find();
        res.json(taxes);
    } catch (error) {
        console.error('Error fetching tax details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { userId, taxName, taxRate } = req.body;
        const newTax = new Tax({ userId, taxName, taxRate }); 
        await newTax.save();
        res.status(201).json(newTax);
    } catch (error) {
        console.error('Error creating tax detail:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, taxName, taxRate } = req.body;
        const updatedTax = await Tax.findByIdAndUpdate(id, { userId, taxName, taxRate }, { new: true });
        res.json(updatedTax);
    } catch (error) {
        console.error('Error updating tax detail:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Tax.findByIdAndDelete(id);
        res.json({ message: 'Tax detail deleted successfully' });
    } catch (error) {
        console.error('Error deleting tax detail:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
