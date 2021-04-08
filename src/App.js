import React from 'react';
import Header from './Header';
import DinderCards from './DinderCards';
import HomePage from './HomePage';
import Restaurants from './Restaurants';
import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      {/* Header */}
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/swipe' component={DinderCards} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
