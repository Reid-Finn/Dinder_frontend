import {YELP_BASE_URL, BEARER_TOKEN} from './config';
import { connect, useSelector } from 'react-redux';

const yelpURL = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=Round Rock"

 function getRestaurants() {
    return dispatch => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=Greece`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,

        }
        
    })
        .then(resp => resp.json())
        .then(data => {
            dispatch({type: "SET_RESTAURANTS", data })
        }

        )}
    }

export default getRestaurants
