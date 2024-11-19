const MovieList = ({ movies }) => (
    <ul className="list-group">
      {movies.map(movie => (
        <li key={movie.id} className="list-group-item">
          {movie.title} ({movie.year})
        </li>
      ))}
    </ul>
  );
  
  export default MovieList;
  