import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // To extract the movie ID from URL
import { getMovieById } from '../api'; // Import API call for getting a single movie

const MovieDetails = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details using the ID from the URL
    getMovieById(id)
      .then(response => setMovie(response.data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]); // Re-fetch movie details if the ID changes

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Release Year:</strong> {movie.releaseYear}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Duration:</strong> {movie.duration} minutes</p>
      <p><strong>Description:</strong> {movie.description}</p>
    </div>
  );
};

export default MovieDetails;
