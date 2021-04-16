



const initState = {
    User: [],
}


const userReducer = (state = initState, action) => {
    switch(action.type) {
        case "SET_USER":
                return{
                    ...state,
                    User: action

                }
            default:
                return state
                
    }
}


export default userReducer