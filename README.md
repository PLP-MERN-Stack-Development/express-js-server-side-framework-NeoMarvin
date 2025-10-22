/*
# 🚂 Week 2: Express.js – Server-Side Framework

## 📌 Description
A RESTful API built using **Node.js**, **Express**, and **MongoDB (Mongoose)** for managing products.
This project demonstrates full CRUD operations, middleware, authentication, validation, and error handling.

## ⚙️ Setup Instructions

1. Install dependencies:
   npm install express mongoose dotenv express-validator nodemon

2. Create a `.env` file with:
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/mern-july

3. Run the server:
   npm run dev
   or
   node server.js

4. Server runs at: http://localhost:5000

---

## 🧩 API Endpoints

| Method | Endpoint             | Description           |
|---------|----------------------|-----------------------|
| GET     | /api/products        | Get all products      |
| GET     | /api/products/:id    | Get product by ID     |
| POST    | /api/products        | Create new product    |
| PUT     | /api/products/:id    | Update a product      |
| DELETE  | /api/products/:id    | Delete a product      |

---

## 🔐 Middleware
- **Logger:** Logs request method, URL, and timestamp.
- **Auth:** Checks for `x-api-key` in headers.
- **Validation:** Ensures product fields are valid before creation or update.
- **Error Handler:** Handles all async and custom errors gracefully.

## 👨🏽‍💻 Author
**Marvin B** – PLP Full Stack Developer