import React, { Component, useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';



const SwitchUser = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.User.data);
    const currentuser = useSelector(state => state.user.currentuser)
    console.log("clicked")
    if (currentuser === "Person1") {
        dispatch({type: "SWITCH_USER_TO_TWO"})
    }
    else {
        dispatch({type: "SWITCH_USER_TO_ONE"})
    }
}


const mapStateToProps = state => {
    return{ 
        restaurants: state.Restaurants,
        user: state.user.currentuser
    }
}

export default connect(mapStateToProps)(SwitchUser);