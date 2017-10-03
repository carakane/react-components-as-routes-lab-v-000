import React from 'react';
import { movies } from '../data';

const movieList = movies.map(movie => <div>{movie.title}, {movie.time} <ul>{movie.genres.map(genre => <li>{genre.name}</li>)}</ul></div>)

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movieList}
    </div>
  );
};

export default Movies;
