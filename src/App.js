import React, { Component, useState, useEffect } from 'react';
import Header from './Components/Header';
import DinderCards from './Components/DinderCards';
import HomePage from './Components/HomePage';
import Register from './Components/Register';
import Signin from './Components/SignIn';
import * as api from './hooks/yelp-api/api';
import './App.css';
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const yelpURL = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Round Rock"

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

     const [restaurant, setRestaurant] = useState([]);
     const [fetchParams, setFetchParams] = useState('restaurant', '78665')

    useEffect(() => {
    
        
        const fetchData = async () => {
              try{
                const rawData = await api.get(yelpURL);
                const resp = await rawData.json();
                debugger
                console.log(resp);
            } catch(e) {
                console.error(e);
            }

        };
       
    });

    return (
      <Router>
        <div className="App">
        {/* Header */}
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/swipe' component={DinderCards} />
          <Route path='/register' component={Register} />
          <Route path='/signin'component={Signin} />
        </Switch>
      </div>
      </Router>
    );  
  
}

export default App;
