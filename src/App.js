import React, { Component, useState, useEffect } from 'react';
import Header from './Components/Header';
import DinderCards from './Components/DinderCards';
import HomePage from './Components/HomePage';
import Register from './Components/Register';
import Login from './Components/Login';
import SwipeButtons from './Components/SwipeButtons';
import SwitchPerson from './Components/SwitchPerson';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'




const App = () => {
 
 
    return (
      <Router>
        <div className="App">
        {/* Header */}
        <Header />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/swipe'>
              <DinderCards />
              <SwipeButtons />
            </Route>
            <Route path='/signin' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/switch' component={SwitchPerson} />
          </Switch>
      </div>
      </Router>
    );  
  
}

export default App;
