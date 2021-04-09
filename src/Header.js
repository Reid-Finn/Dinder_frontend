import React from 'react'
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import PeopleIcon from '@material-ui/icons/People';
import DinderPic from './dinderPic.png';



 function Header() {
    return (
        <div className="header">
            <IconButton href="/">
                <HomeIcon fontSize='large' />
            </IconButton>
            <IconButton href="/switch">
                <PeopleIcon fontSize='large' />
            </IconButton>
            <IconButton href="/chat">
                <ChatIcon fontSize='large' />
            </IconButton>
        </div>
    )
}
export default Header;
