// src/components/MovieList.js
import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-md-4" key={movie._id}>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text"><strong>Director:</strong> {movie.director}</p>
              <p className="card-text"><strong>Genre:</strong> {movie.genre}</p>
              <p className="card-text"><strong>Release Year:</strong> {movie.releaseYear}</p>
              <p className="card-text"><strong>Rating:</strong> {movie.rating}</p>
              <p className="card-text"><strong>Duration:</strong> {movie.duration} minutes</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
