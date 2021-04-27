import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import './DinderCards.css';
import Popover from '@material-ui/core/Popover';
import  getRestaurants from '../actions/getRestaurants';
import SwitchUser from './SwitchPerson';
import { connect, useSelector, useDispatch } from 'react-redux';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';




const DinderCards = () => {
    
    const dispatch = useDispatch();
    const restaurants = useSelector(state => state.restaurants.Restaurants);
    const user = useSelector(state => state.user.User.data);
    const currentuser = useSelector(state => state.user.currentuser)
    //const [currentuser, setCurrentUser] = useState(useSelector(state => state.user.currentuser))
    const switchUser = () => {
        console.log("clicked")
        if (currentuser === "Person1") {
            dispatch({type: "SWITCH_USER_TO_TWO"});
            //setCurrentUser("Person2")
        }
        else {
            dispatch({type: "SWITCH_USER_TO_ONE"})
        }
    }

    
    const save = (direction, restaurantName) =>  {
        console.log(`saving ${restaurantName} to  restaurant list`);
        console.log(user)
        console.log(direction);
        console.log(restaurantName);
        if(direction === "right") {
            debugger
            if (currentuser === "Person1"){
               
              user.person1restaurants.push(restaurantName)
   
                fetch(`http://127.0.0.1:3001/users/${user.id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                    person1restaurants: user.person1restaurants
                })
            });
        }
            else {
                debugger
                user.person2restaurants.push(restaurantName)
                fetch(`http://127.0.0.1:3001/users/${user.id}`, {
                    method: 'PATCH',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                    person2restaurants: user.person2restaurants
            
           })
        });
     }}
    }
    

     useEffect(() => {dispatch(getRestaurants());}, [currentuser])
   return (
    <div>
        <button className="Toggleuser" onClick={switchUser}>Toggle User</button>
        <h2>Welcome, {currentuser}! Lets find dinner tonight!</h2>
    <div className="DinderCards_cardContainer">
        {restaurants.map(restaurant => (
            <TinderCard
                className="swipe"
                key={restaurant.name}
                preventSwipe={['up', 'down']} onSwipe={(dir) => save(dir, restaurant.name)}>
                <div 
                style={{ backgroundImage: `url(${restaurant.image_url})`}}
                className="card">
                    
                <h3>{restaurant.name}</h3>
                <h2><IconButton className="button_info">
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
        restaurants: state.Restaurants,
        user: state.user.currentuser
    }
}

export default connect(mapStateToProps, {getRestaurants})(DinderCards);