// userRoutes.js
const express = require('express');
const router = express.Router();

// Example route handler for user registration
router.post('/register', (req, res) => {
  // Your registration logic here
  res.send('User registered');
});

module.exports = router;
