import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from "react-router-dom";
import  getUser from '../actions/getUser';
import { connect, useSelector, useDispatch } from 'react-redux';







const Login = () =>{
  const dispatch = useDispatch();
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  const[redirect, setRedirect] = useState(false);

  

  const submit = async(e) => {
    e.preventDefault();
    
     await fetch('http://127.0.0.1:3001/login', {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({
         username,
         password
       }) 
        
     })
     .then(resp => resp.json())
     .then(data => {
          dispatch({type: "SET_USER", data })
        });

    setRedirect(true)

     
  }
  if(redirect) {
    return <Redirect to="/swipe" />;
  };
    
  
    return (

                <form onSubmit={submit}>
                  <h1>Log In</h1>
                  
                    <label>Username</label>
                    <input  type="text"  placeholder="username" name="username" required
                    onChange={e => setUsername(e.target.value)}/>
                 
                    <label>Password</label>
                    <input  type="password" placeholder="password" name="password" required
                    onChange={e => setPassword(e.target.value)}/>
    
                  <button type="submit">Login</button>
                </form>   
              
        );
    
    }
   


  
  export default Login