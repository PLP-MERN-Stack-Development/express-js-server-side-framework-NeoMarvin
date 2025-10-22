const express = require('express');
const router = express.Router();
const Product = require('../models/products');
const validateProduct = require('../middleware/validateProduct');
const auth = require('../middleware/auth');

// List all products
router.get('/', async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.json(allProducts)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a spscific product by ID
router.get('/:id', async (req, res) => {
    try {
        const specificProduct = await Product.findById(
            req.params.id
        );
        if (!specificProduct)  
            return res.status(404).json({ message: 'Product not found' });
        res.json(specificProduct)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
});

// Create a new product
router.post('/', auth, validateProduct, async (req, res) => {
    const { name, description, price, category, inStock } = req.body
    try {
        const newProduct = new Product({  name, description, price, category, inStock }) 
        const savedProduct = await newProduct.save()
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message});
    }
});

// Update an existing product
router.put('/:id', auth, validateProduct, async (req, res) => {
    try {
        const UpdatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }   
        );
        if (!UpdatedProduct)
            return res.status(404).json({ message: 'Product not found' });
        res.json(UpdatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a product
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await product.findByIdAndDelete(
            req.params.id
        );
        if (!deleted)
            return res.status(404).json({ message: 'Product not found'});
        res.json({message: " Product Deleted! "})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router;