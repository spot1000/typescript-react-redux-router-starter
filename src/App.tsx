import * as React from 'react';
import './App.css';
import Hello from './containers/HelloContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterSheet from './components/CharacterSheet';


const logo = require('./logo.svg');

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
    </div>
  );
}


const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/hello' component={Hello} />
      <Route path='/CS' component={CharacterSheet} />
    </Switch>
  </Router>
)



export default Routes;
