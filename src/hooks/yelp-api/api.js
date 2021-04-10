import {YELP_BASE_URL, BEARER_TOKEN} from './config';
import queryString from 'query-string';

export function get(path, queryParams) {
    const query = queryString.stringify(queryParams)
    
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=Round Rock`, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            Origin: 'localhost',
            withCredentials: true,

        }
       
    })
    
}