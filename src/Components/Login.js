import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from "react-router-dom";
import  getUser from '../actions/getUser';
import { connect, useSelector, useDispatch } from 'react-redux';







const Login = () =>{
    const handleSubmit = (e) => {
        e.preventDefault();
        
        debugger;
        {dispatch(getUser(e))}
    }
    
    
    const dispatch = useDispatch();
    const user = useSelector(state => state);
    return (

                <form onSubmit={handleSubmit}>
                  <h1>Log In</h1>
                  
                    <label>Username</label>
                    <input  type="text"  placeholder="username" name="username"/>
                 
                    <label>Password</label>
                    <input  type="password" placeholder="password" name="password"/>
    
                  <button type="submit">Login</button>
                </form>   
              
        )};
      
  
  export default Login