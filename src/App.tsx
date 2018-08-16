import * as React from 'react';
import './App.css';
import Hello from './containers/HelloContainer';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MadLib from './containers/madLibContainer';


const logo = require('./logo.svg');

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React with Router, Redux and Typescript!</h2>
      </div>
      <p className="App-intro">
        To get started, click on a link.
      </p>
      <Link to="/hello">Enthusiam!</Link>
      <br />
      <Link to="/madlib">MadLibs</Link>
    </div>
  );
}


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/hello' component={Hello} />
      <Route path='/madlib' component={MadLib} />
    </Switch>
  </Router>
)



export default Routes;
