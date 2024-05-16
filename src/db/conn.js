const mongoose = require('mongoose');

// Define the MongoDB URI
const mongoURI = 'mongodb://localhost:27017/fitfusion';

// Function to establish a connection to MongoDB
const dbcorn = async () => {
  try {
    await mongoose.connect(mongoURI);  // Connect with the default options
    console.log('connected successfully');
  } catch (e) {
    console.error('connection error', e);
  }
};

// Export the connection function
module.exports = { dbcorn };
