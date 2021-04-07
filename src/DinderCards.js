import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import './DinderCards.css';

function DinderCards() {
    const [restaurant, setRestaurant] = useState([
        {
            name: 'Applebees',
            url: 'https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/Applebee_s_Apple_Cal_unit_%20copy_0.png?itok=KBpziejA'
        }
    ]);
    return (
        <div>
            <h1>DinderCards working!</h1>
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
    )
}



export default DinderCards