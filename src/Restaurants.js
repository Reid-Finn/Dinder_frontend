import React, { Component } from 'react'

function Restaurants() {
    const getRestaurants = () => {
        fetch("https://axesso-tripadvisor-data-service.p.rapidapi.com/tpa/tripadvisor-restaurant-details?locationId=2345886", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c040d6ad58msh0dac702e285eb0bp1190d7jsnd7236d84ebe9",
		"x-rapidapi-host": "axesso-tripadvisor-data-service.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
   
        return (
            <div>
                
            </div>
        );
    }
}

export default Restaurants
