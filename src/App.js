import React from 'react';
import Header from './Header';
import DinderCards from './DinderCards';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Router>
        <Route path='/chat'>
          <h1> Dinder!</h1>
          <h3>Swipe to find dinner!</h3>
      {/* Dinder Cards */}
      {/* Buttons below Dinder Cards */}
        </Route>
        <Route path='/'>
        </Route>
        <Route path='/swipe'>
          <DinderCards />
        </Route>
      </Router>
    </div>
  );
}

export default App;
