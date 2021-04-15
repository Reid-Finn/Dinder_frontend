import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from "react-router-dom";

const Login = () => {
  
    return (

                <form onSubmit={()}>
                  <h1>Log In</h1>
                  
                    <label>Username</label>
                    <input onChange={handleChange} type="text" value={user.username} placeholder="username" name="username"/>
                 
                    <label>Password</label>
                    <input onChange={handleChange} type="password"value={user.password} placeholder="password" name="password"/>
    
                  <button type="submit">Login</button>
                </form>   
              
        )};
      
  
  export default Login