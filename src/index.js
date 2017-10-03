import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import {BrowserRouter as Router, Route, Navlink} from 'react-router-dom';

const App = () => {
  return (
<Router>
  <div>
		<Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/movies" component={Movies} />
		<Route exact path="/directors" component={Directors} />
    <Route exact path="/actors" component={Actors} />
  </div>
</Router>
  );
};


render (
  <App />,
  document.getElementById('root')
);
