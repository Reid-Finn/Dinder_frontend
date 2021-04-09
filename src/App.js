import React, { Component } from 'react';
import Header from './Header';
import DinderCards from './DinderCards';
import HomePage from './HomePage';
import Restaurants from './Restaurants';
import Register from './Register';

import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  
  render(){
    return (
      <Router>
        <div className="App">
        {/* Header */}
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/swipe' component={DinderCards} />
          <Route path='/register' component={Register} />
          <Route path='/restaurants' component={Restaurants} />
        </Switch>
      </div>
      </Router>
    );  
  }
}

export default App;
