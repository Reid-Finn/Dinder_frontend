



const initState = {
    Restaurants: [],
}


const restaurantReducer = (state = initState, action) => {
    switch(action.type) {
        case "SET_RESTAURANTS":
                return{
                    
                    Restaurants: action.data.businesses

                }
            default:
                return state
                
    }
}


export default restaurantReducer