import React, { useEffect, useState } from 'react';
import { getAllMovies } from './api';
import MovieList from './MovieList'; // No need for '../' because both are in the same folder


const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="container">
      <h1>Movie Database</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;

