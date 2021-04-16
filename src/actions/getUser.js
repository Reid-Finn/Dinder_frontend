function getUser(user) {
    return dispatch => {
        fetch('http://127.0.0.1:3001/login', {
               method: 'POST',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify({
                 username: user.username,
                 password: user.password
               })
               
            })
                .then(resp => resp.json())
                .then(data => {
                   dispatch({type: "SET_USER", data })
               })
            } 
    }


export default getUser