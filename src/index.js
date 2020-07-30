import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Degree from './pages/Degree';
import Certifications from './pages/Certifications';
import Skills from './pages/Skills';

import { BrowserRoute as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/experience" component={Experience} />
      <Route exact path="/degree" component={Degree} />
      <Route exact path="/certifications" component={Certifications} />
      <Route exact path="/skills" component={Skills} />
    </Switch>
    {/* <App /> */}
  </Router>,
  document.getElementById('root')
);
