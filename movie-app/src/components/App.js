// src/App.js
import React, { useEffect, useState } from 'react';
import { getAllMovies, getMovieById, deleteMovie, addMovie, updateMovie } from './api'; // Include updateMovie
import MovieList from './MovieList';
import '../App.css'; // Correct if App.css is in the src folder and App.js is in components folder

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [newMovie, setNewMovie] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    rating: '',
    duration: '',
  });

  const [isEditing, setIsEditing] = useState(false); // Track if in edit mode

  // Fetch all movies
  useEffect(() => {
    getAllMovies()
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  // Filter movies based on the search term
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle View Details
  const handleViewDetails = (id) => {
    getMovieById(id)
      .then(response => setSelectedMovie(response.data))
      .catch(error => console.error('Error fetching movie details:', error));
  };

  // Handle Delete Movie
  const handleDeleteMovie = (id) => {
    deleteMovie(id)
      .then(() => setMovies(prevMovies => prevMovies.filter(movie => movie._id !== id)))
      .catch(error => console.error('Error deleting movie:', error));
  };

  // Handle Add Movie
  const handleAddMovie = (e) => {
    e.preventDefault();
    addMovie(newMovie)
      .then(response => {
        setMovies([...movies, response.data]); // Add new movie to the state
        setNewMovie({ title: '', director: '', genre: '', releaseYear: '', rating: '', duration: '' }); // Clear form
      })
      .catch(error => console.error('Error adding movie:', error));
  };

  // Handle Update Movie
  const handleUpdateMovie = (e) => {
    e.preventDefault();
    updateMovie(selectedMovie._id, selectedMovie) // Assuming the API expects the ID and updated data
      .then((response) => {
        setMovies(movies.map((movie) => (movie._id === selectedMovie._id ? response.data : movie)));
        setIsEditing(false); // Exit edit mode after successful update
      })
      .catch((error) => console.error('Error updating movie:', error));
  };

  // Handle form change for add/update
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (isEditing) {
      setSelectedMovie((prevMovie) => ({
        ...prevMovie,
        [name]: value,
      }));
    } else {
      setNewMovie((prevMovie) => ({
        ...prevMovie,
        [name]: value,
      }));
    }
  };

  return (
    <div className="container">
      <h1>Movie Database</h1>

      {/* Search Input */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Display Single Movie Details */}
      {selectedMovie && !isEditing && (
        <div className="movie-details">
          <h2>{selectedMovie.title}</h2>
          <p><strong>Director:</strong> {selectedMovie.director}</p>
          <p><strong>Genre:</strong> {selectedMovie.genre}</p>
          <p><strong>Release Year:</strong> {selectedMovie.releaseYear}</p>
          <p><strong>Rating:</strong> {selectedMovie.rating}</p>
          <p><strong>Duration:</strong> {selectedMovie.duration} minutes</p>
          <button onClick={() => setSelectedMovie(null)}>Back to List</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => handleDeleteMovie(selectedMovie._id)}>Delete</button>
        </div>
      )}

      {/* Display Movie List */}
      {!selectedMovie && !isEditing && (
        <MovieList
          movies={filteredMovies}
          onViewDetails={handleViewDetails}
          onDelete={handleDeleteMovie}
        />
      )}

      {/* Add Movie Form - Moved to the bottom */}
      {!selectedMovie && !isEditing && (
        <form onSubmit={handleAddMovie} className="mb-3 mt-5">
          <h3>Add a New Movie</h3>
          <input
            type="text"
            className="form-control mb-2"
            name="title"
            value={newMovie.title}
            onChange={handleFormChange}
            placeholder="Movie Title"
          />
          <input
            type="text"
            className="form-control mb-2"
            name="director"
            value={newMovie.director}
            onChange={handleFormChange}
            placeholder="Director"
          />
          <input
            type="text"
            className="form-control mb-2"
            name="genre"
            value={newMovie.genre}
            onChange={handleFormChange}
            placeholder="Genre"
          />
          <input
            type="number"
            className="form-control mb-2"
            name="releaseYear"
            value={newMovie.releaseYear}
            onChange={handleFormChange}
            placeholder="Release Year"
          />
          <input
            type="number"
            className="form-control mb-2"
            name="rating"
            value={newMovie.rating}
            onChange={handleFormChange}
            placeholder="Rating"
          />
          <input
            type="number"
            className="form-control mb-2"
            name="duration"
            value={newMovie.duration}
            onChange={handleFormChange}
            placeholder="Duration (minutes)"
          />
          <button type="submit" className="btn btn-success">Add Movie</button>
        </form>
      )}

      {/* Edit Movie Form */}
      {selectedMovie && isEditing && (
        <form onSubmit={handleUpdateMovie} className="mb-3 mt-5">
          <h3>Edit Movie</h3>
          <input
            type="text"
            className="form-control mb-2"
            name="title"
            value={selectedMovie.title}
            onChange={handleFormChange}
            placeholder="Movie Title"
          />
          <input
            type="text"
            className="form-control mb-2"
            name="director"
            value={selectedMovie.director}
            onChange={handleFormChange}
            placeholder="Director"
          />
          <input
            type="text"
            className="form-control mb-2"
            name="genre"
            value={selectedMovie.genre}
            onChange={handleFormChange}
            placeholder="Genre"
          />
          <input
            type="number"
            className="form-control mb-2"
            name="releaseYear"
            value={selectedMovie.releaseYear}
            onChange={handleFormChange}
            placeholder="Release Year"
          />
          <input
            type="number"
            className="form-control mb-2"
            name="rating"
            value={selectedMovie.rating}
            onChange={handleFormChange}
            placeholder="Rating"
          />
          <input
            type="number"
            className="form-control mb-2"
            name="duration"
            value={selectedMovie.duration}
            onChange={handleFormChange}
            placeholder="Duration (minutes)"
          />
          <button type="submit" className="btn btn-primary">Update Movie</button>
        </form>
      )}
    </div>
  );
};

export default App;
