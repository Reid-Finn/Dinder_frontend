import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import './DinderCards.css';
import InfoIcon from '@material-ui/icons/Info';
import ArrowLeft from '@material-ui/icons/ArrowBack';
import ArrowRight from '@material-ui/icons/ArrowForward';
import {YELP_BASE_URL, BEARER_TOKEN} from '../actions/config';
import * as api from '../hooks/yelp-api/api';
import  getRestaurants from '../actions/index';
import { connect, useSelector, useDispatch } from 'react-redux';




const yelpURL = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Canandaigua"


// const [restaurants, setRestaurants] = useState([])

const DinderCards = () => {
    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.Restaurants);
    const [user, setUser] = useState([])
     
     useEffect(() => {dispatch(getRestaurants());}, [user])
   return (
    <div>
    
    <div className="DinderCards_cardContainer">
        {restaurants.map(restaurant => (
            <TinderCard
                className="swipe"
                key={restaurant.name}
                preventSwipe={['up', 'down']}>
                <div 
                style={{ backgroundImage: `url(${restaurant.image_url})`}}
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
    
const mapStateToProps = state => {
    return{ 
        restaurants: state.Restaurants
    }
}

export default connect(mapStateToProps, {getRestaurants})(DinderCards);