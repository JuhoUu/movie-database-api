// src/App.js
import React, { useEffect, useState } from 'react';
import { getAllMovies } from './api';
import MovieList from './MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAllMovies()
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      {/* Display filtered movies */}
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
