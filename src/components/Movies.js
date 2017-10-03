import React from 'react';
import { movies } from '../data';

const movies = movies.map(movie => <div>{movie.title}</div>)
const Movies = () => {
  return (


    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies}
    </div>
  );
};

export default Movies;
