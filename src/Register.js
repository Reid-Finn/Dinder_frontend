import React, {Component} from 'react';
import axios from 'axios';

export default class Register extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            first_person: this.firstPersonName,
            second_person: this.secondPersonName,
            zipcode: this.zipcode,
            username: this.username,
            password: this.password
        };
        axios.post('http://localhost:3000/register', data).then(
            resp => {
                console.log(resp)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    };
    render(){
        return (
        
        <form onSubmit={ this.handleSubmit}>
            <h3> Sign Up</h3>
            <div className="form-group">
                <label>First Person Name</label>
                <input type="text" className="form-control" placeholder="First Person Name" onChange={e => this.firstPersonName = e.target.value}/>
            </div>
            <div className="form-group">
                <label>Second Person Name</label>
                <input type="text" className="form-control" placeholder="Second Person Name" onChange={e => this.secondPersonName = e.target.value}/>
            </div>
            <div className="form-group">
                <label>Zipcode</label>
                <input type="integer" className="form-control" placeholder="Zipcode" onChange={e => this.zipcode = e.target.value}/>
            </div>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username"
                onChange={e => this.username = e.target.value}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password"
                onChange={e => this.password = e.target.value}/>
            </div>

            <button className="btn btn-primary btn-block">Sign Up!</button>


        </form>
    )
}}