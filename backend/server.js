const express = require('express');
const connectDB = require('./config/db'); // Import the connectDB function
const userRoutes = require('./routes/userRoutes'); // Import user routes
const activityRoutes = require('./routes/activityRoutes'); // Import activity routes

const app = express();

// Connect to MongoDB
connectDB();  // Call connectDB to connect to MongoDB Atlas

// Middleware to parse incoming JSON data
app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/activities', activityRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
