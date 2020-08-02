import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import Graduations from './pages/Graduations';
import Experiences from './pages/Experiences';
import Activities from './pages/Activities';
import Skills from './pages/Skills';

import './index.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/graduations" component={Graduations} />
      <Route exact path="/experiences" component={Experiences} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/activities" component={Activities} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
