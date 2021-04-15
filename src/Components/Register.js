import React, {SyntheticEvent, useState} from 'react';
import { Redirect } from 'react-router-dom';

 const Register = () => {
   const[username, setUsername] = useState('');
   const[person1name, setPerson1Name] = useState('');
   const[person2name, setPerson2Name] = useState('');
   const[city, setCity] = useState('');
   const[password, setPassword] = useState('');
   const[redirect, setRedirect] = useState(false);

   const submit = async(e: SyntheticEvent) => {
     e.preventDefault();
     
     await fetch('http://127.0.0.1:3001/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username,
          person1name,
          person2name,
          city,
          password
        })
     });

     setRedirect(true)
  }

  if(redirect) {
  return <Redirect to="/signin" />;
  }
  return (
    <form onSubmit={submit}>
      <h1 className="signupheader">Please fill out the form below to Sign up!</h1>

      <input type="text" className="form-control" placeholder="username" required
          onChange={e => setUsername(e.target.value)}/>
      <input type="text" className="form-control" placeholder="person1name" required
          onChange={e => setPerson1Name(e.target.value)}/>
      <input type="text" className="form-control" placeholder="person2name" required
          onChange={e => setPerson2Name(e.target.value)}/>
      <input type="text" className="form-control" placeholder="city" required
          onChange={e => setCity(e.target.value)}/>
      <input type="password" className="form-control" placeholder="password" required
          onChange={e => setPassword(e.target.value)}/>
      <button className="submitbtn" type="submit">Submit</button>
    </form>
  );
};


export default Register;
