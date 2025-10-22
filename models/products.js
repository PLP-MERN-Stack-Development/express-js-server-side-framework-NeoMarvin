const mongoose = require('mongoose');

// Extract Schema from mongoose
const { Schema, model } = mongoose;

// Define product schema
const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  description: String,
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, `Price must be positive`]
  },
  category: {
    type: String,
    enum: ['electronics', 'fashion', 'grocery', 'other'],
    default: 'other'
  },
  inStock: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true }); 

// Create model
const Product = model('Product', productSchema);

module.exports = Product;
