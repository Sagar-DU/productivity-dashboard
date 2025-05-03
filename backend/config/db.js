const mongoose = require('mongoose');
require('dotenv').config();  // To load environment variables from .env file

const connectDB = async () => {
  try {
    // Connect to MongoDB Atlas using the URI from .env
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,   // Ensures the MongoDB URI is parsed correctly
      useUnifiedTopology: true, // Ensures the latest driver settings are used
    });

    console.log('MongoDB connected');
  } catch (err) {
    // If connection fails, log the error and exit the process
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;  // Export the connectDB function
