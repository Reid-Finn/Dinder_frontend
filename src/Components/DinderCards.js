import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import './DinderCards.css';
import InfoIcon from '@material-ui/icons/Info';
import ArrowLeft from '@material-ui/icons/ArrowBack';
import ArrowRight from '@material-ui/icons/ArrowForward';
import * as api from '../hooks/yelp-api/api';





function DinderCards() {
    const [restaurant, setRestaurant] = useState([
        {
            name: "Applebee's",
            picture: "https://www.applebees.com/-/media/applebees/campaigns-2/health-and-safety/sanitation-lower-module-desktop.jpg?la=en&hash=87F93C0DB6C15FF647D5C4BE3A8D9F5938E36C9E"
        },

        {
            name: "Buffalo Wild Wings",
            picture: "https://stories.inspirebrands.com/wp-content/uploads/2018/12/Buffalo-Wild-Wings-Restaurant-Exterior.jpg"
        }
    ])
    
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