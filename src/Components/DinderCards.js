import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import './DinderCards.css';
import InfoIcon from '@material-ui/icons/Info';
import ArrowLeft from '@material-ui/icons/ArrowBack';
import ArrowRight from '@material-ui/icons/ArrowForward';
import {YELP_BASE_URL, BEARER_TOKEN} from '../hooks/yelp-api/config';
import * as api from '../hooks/yelp-api/api';




const yelpURL = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Round Rock"

const DinderCards = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
       const [restaurant, setRestaurant] = useState([]);
       const [fetchParams, setFetchParams] = useState('restaurant', '78665')
  
      useEffect(() => {
          const fetchData = async () => {
              try{
                  const rawData = await api.get(yelpURL);
                  const resp = await rawData.json();
                 
                  console.log(resp);
                  
              } catch(e) {
                  console.error(e);
              }
  
          };
          fetchData();
      });
   return (
    <div>
    <h1>Swipe Right if you would like to have dinner here. Swipe left if not.</h1>
    <div className="DinderCards_cardContainer">
        {restaurant.map(restaurant => (
            <TinderCard
                className="swipe"
                key={restaurant.name}
                preventSwipe={['up', 'down']}>
                <div 
                style={{ backgroundImage: `url(${restaurant.picture})`}}
                className="card">
                <h3>{restaurant.name}</h3>
                </div>
            </TinderCard>
    ))}
    </div>
    <ArrowLeft />
    <InfoIcon />
    <ArrowRight />
</div>

   );
    }

export default DinderCards