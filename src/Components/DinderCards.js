import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import './DinderCards.css';
import Popover from '@material-ui/core/Popover';
import  getRestaurants from '../actions/getRestaurants';
import { connect, useSelector, useDispatch } from 'react-redux';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';




function clickInfo() {
 
}

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
                <h2><IconButton onClick={clickInfo} className="button_info">
                <InfoIcon fontSize="large" />
                </IconButton></h2>
                </div>
            </TinderCard>
    ))}

    </div>
    
</div>

   );
}
    
const mapStateToProps = state => {
    return{ 
        restaurants: state.Restaurants
    }
}

export default connect(mapStateToProps, {getRestaurants})(DinderCards);