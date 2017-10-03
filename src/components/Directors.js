import React from 'react';
import { directors } from '../data';

const directorList = directors.map(movie => <div>{director.name}</div>)


const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
    </div>
  );
}

export default Directors
