import React from 'react';
import { directors } from '../data';

const directorList = directors.map(director => <div>{director.name}</div>)


const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors
