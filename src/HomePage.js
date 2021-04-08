import React from 'react';
import DinderPic from './dinderPic.png';

function HomePage() {
    return (
        <div>
            <h1>DINDER</h1>
            <img src={DinderPic} alt=''>
            </img>
            <h1>"Dinder is how people agree where to eat. It's like real life, but better."</h1>
        </div>
    )
}


export default HomePage