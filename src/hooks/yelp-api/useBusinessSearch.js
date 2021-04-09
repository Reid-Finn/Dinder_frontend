import {useState} from 'react';
import * as api from './api';




export function useBusinessSearch(restaurant, location) {
    
     const [restaurant, setRestaurant] = useState([]);
     const [fetchParams, setFetchParams] = useState('restaurant', '78665')

    useEffect(() => {
        setRestaurant([]);
        const fetchData = async () => {
            try{
                const rawData = await api.get('/businesses/search', fetchParams);
                const resp = await rawData.json();
                debugger
                setRestaurant(resp.businesses);
            } catch(e) {
                console.error(e);
            }

        };
        fetchData();
    });
    return [restaurant];
    
}