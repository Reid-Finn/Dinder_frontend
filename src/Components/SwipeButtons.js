import React from 'react';
import './SwipeButtons.css';
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipebutton_left">
                <CloseIcon fontSize="large" />
            </IconButton>
            
            <IconButton className="swipebutton_right">
            {/* swipe={['right']} */}
                <FavoriteIcon fontSize="large" />
            </IconButton>
            
            
        </div>
    )
}

export default SwipeButtons
