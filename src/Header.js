import React from 'react'
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import DinderPic from './dinderPic.png';



 function Header() {
    return (
        <div className="header">
            <IconButton>
                <HomeIcon fontSize='large' />
            </IconButton>
            <img fontSize='large' className='header_logo' src={DinderPic} alt=''></img>
            <IconButton>
                <ChatIcon fontSize='large' />
            </IconButton>
        </div>
    )
}
export default Header;
