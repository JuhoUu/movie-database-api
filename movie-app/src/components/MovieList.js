// src/components/MovieList.js
import React from 'react';

const MovieList = ({ movies, onViewDetails, onDelete }) => {
  return (
    <div className="row">
      {movies.map((movie) => (
        <div className="col-md-4" key={movie._id}>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text"><strong>Director:</strong> {movie.director}</p>
             

              {/* View Details Button */}
              <button
                className="btn btn-primary btn-sm me-2"
                onClick={() => onViewDetails(movie._id)}
              >
                View Details
              </button>

              {/* Delete Button */}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(movie._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
