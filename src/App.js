import React, { Component, useState, useEffect } from 'react';
import Header from './Components/Header';
import DinderCards from './Components/DinderCards';
import HomePage from './Components/HomePage';
import Signin from './Components/SignIn';
import SwipeButtons from './Components/SwipeButtons';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


const yelpURL = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Round Rock"

const App = () => {
 
    return (
      <Router>
        <div className="App">
        {/* Header */}
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/swipe' component={DinderCards} />
          <Route path='/swipe' component={SwipeButtons} />
          <Route path='/signin'component={Signin} />
        </Switch>
      </div>
      </Router>
    );  
  
}

export default App;
