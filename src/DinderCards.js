import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import './DinderCards.css';
import InfoIcon from '@material-ui/icons/Info';
import ArrowLeft from '@material-ui/icons/ArrowBack';
import ArrowRight from '@material-ui/icons/ArrowForward';
import * as api from './hooks/yelp-api/api';




function DinderCards() {
     
    const [restaurant, setRestaurant] = useState([]);


    useEffect(() => {
        setRestaurant([]);
        const fetchData = async () => {
            try{
                const rawData = await api.get();
                const resp = await rawData.json();
                setRestaurant(resp.businesses);
            } catch(e) {
                console.error(e);
            }

        };
        fetchData();
    });    
    
        return  [restaurant];
}



export default DinderCards