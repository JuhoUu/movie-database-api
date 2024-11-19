const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movieRoutes');

dotenv.config(); // Load environment variables

const app = express();

// Enable CORS for all origins (you can restrict it later to specific domains)
app.use(cors());

app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.error("MongoDB connection error:", error);
  });

// Routes
app.use('/api', movieRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${5000}`);
});
