import React from 'react';
import DinderPic from './dinderPic.png';
import Button from '@material-ui/core/Button';

function HomePage() {
    return (
        <div>
            <h1>DINDER</h1>
            <img src={DinderPic} alt=''>
            </img>
            <h1>"Dinder is how people agree where to eat. It's like real life, but better."</h1>

            <Button varient="contained" color="primary" href="/signin">
                Sign in
            </Button>
            
            
            <Button varient="contained" color="secondary" href="/register">
                Create New Account
            </Button>
        </div>
    )
}


export default HomePage