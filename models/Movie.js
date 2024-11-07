// models/Movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String },
  genre: { type: String },
  releaseYear: { type: Number },
  rating: { type: Number, min: 0, max: 10 },
  duration: { type: Number }, // duration in minutes
  description: { type: String }
});

module.exports = mongoose.model('Movie', movieSchema);
