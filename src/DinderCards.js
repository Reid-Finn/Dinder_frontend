import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './DinderCards.css';
import InfoIcon from '@material-ui/icons/Info';
import ArrowLeft from '@material-ui/icons/ArrowBack';
import ArrowRight from '@material-ui/icons/ArrowForward';




function DinderCards() {
     
    const [restaurant, setRestaurant] = useState([
        {
            name: 'Applebees',
            url: 'https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/Applebee_s_Apple_Cal_unit_%20copy_0.png?itok=KBpziejA'
        },
        {
            name: 'Buffalo Wild Wings',
            url: 'https://www.nrn.com/sites/nrn.com/files/Buffalo%20Wild%20Wings%20Inc_0.jpg'
        }
    ]);
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
                        style={{ backgroundImage: `url(${restaurant.url})`}}
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
    )
}



export default DinderCards