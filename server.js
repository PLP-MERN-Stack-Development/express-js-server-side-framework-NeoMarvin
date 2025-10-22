const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoute');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth')

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(logger);
app.use(auth);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // for debugging

  // Mongoose validation errors
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({ success: false, message: errors });
  }

  // Mongoose bad ObjectId error
  if (err.name === 'CastError') {
    return res.status(400).json({ success: false, message: `Invalid ${err.path}: ${err.value}` });
  }

  // Default error
  res.status(500).json({
    success: false,
    message: 'Server Error. Please try again later.'
  });
});


// Routes
app.use('/api/products', productRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));