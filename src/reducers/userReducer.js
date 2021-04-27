



const initState = {
    User: [],
}


function userReducer(state = [], action)  {
    switch(action.type) {
        case "SET_USER":
                return{
                    ...state,
                    User: action,
                    currentuser: "Person1"
                    

                };

        case "SWITCH_USER_TO_TWO":
            return{
                ...state,
                currentuser: "Person2"

            };
        
        case "SWITCH_USER_TO_ONE":
            return{
                ...state,
                currentuser: "Person1"

            }


            default:
                return state
                
    }
}


export default userReducer