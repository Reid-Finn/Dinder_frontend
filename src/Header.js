import React from 'react'
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';


 function Header() {
    return (
        <div className="header">
            <IconButton>
                <HomeIcon fontSize='large' />
            </IconButton>
            <img fontSize='large' className='header_logo' src='https://files.slack.com/files-pri/T02MD9XTF-F01SZLU3YCX/image.png' alt=''></img>
            <IconButton>
                <ChatIcon fontSize='large' />
            </IconButton>
        </div>
    )
}
export default Header;
