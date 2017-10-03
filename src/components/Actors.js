import React from 'react';
import { actors } from '../data';

const actorList = actors.map(actor => <div className="actor">{actor.name}</div>)

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
};

export default Actors;
