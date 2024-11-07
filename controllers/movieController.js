// controllers/movieController.js
const Movie = require('../models/Movie');

// GET /api/getall - Return all movies
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// GET /api/:id - Return a single movie by ID
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// POST /api/add - Create a new movie
exports.addMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: "Error creating movie", error });
  }
};

// PUT /api/update/:id - Update an existing movie by ID
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ message: "Error updating movie", error });
  }
};

// DELETE /api/delete/:id - Delete a movie by ID
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
