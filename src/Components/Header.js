import React from 'react'
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import PeopleIcon from '@material-ui/icons/People';
import TouchAppIcon from '@material-ui/icons/TouchApp';



 function Header() {
    
    return (
        <div className="header">
            <IconButton href="/">
                <HomeIcon fontSize='large' />
            </IconButton>
            <IconButton href="/switch">
                <PeopleIcon fontSize='large' />
            </IconButton>
            <IconButton href="/swipe">
                <TouchAppIcon fontSize='large' />
            </IconButton>
        </div>
    )
}
export default Header;
