import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import {BrowserRouter as Router, Route, Navlink} from 'react-router-dom';

const App = () => {
  return (
<Router>
  <div>
		<NavBar />
    <Route exact path="/" component={Home} />
    <Route exact this.props.path="/movies" component={Movies} movies={this.props.movies}/>
		<Route exact path="/directors" component={Directors} directors={this.props.directors}/>
    <Route exact path="/actors" component={Actors} actors={this.props.actors}/>
  </div>
</Router>
  );
};


render (
  <App />,
  document.getElementById('root')
);
