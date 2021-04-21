



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
                    

                }


            default:
                return state
                
    }
}


export default userReducer