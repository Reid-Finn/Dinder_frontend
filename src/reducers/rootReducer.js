import { combineReducers } from 'redux';
import userReducer from './userReducer';
import restaurantReducer from './restaurantReducer';




const rootReducer = combineReducers({
  user: userReducer,
  restaurants: restaurantReducer
})

export default rootReducer