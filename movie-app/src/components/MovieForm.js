import React, { useState } from 'react';
import { addMovie } from '../api';

const MovieForm = () => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newMovie = { title, director, year };
    addMovie(newMovie)
      .then(response => console.log('Movie added:', response.data))
      .catch(error => console.error('Error adding movie:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Director"
        value={director}
        onChange={e => setDirector(e.target.value)}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={e => setYear(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
