import React from 'react';
import { Link } from 'react-router-dom';
import NavigationButton from './NavigationButton';
import './ProfileNav.css';


function ProfileNav(props) {
    return (
        <div className='nav_box'>
            <div className='greet'>
                <img src='https://i.ibb.co/V2Dr3NH/Profile-icon-Graphic.png' style={{ width: "65px", height: "65px" }} />
                <span className='hello'>Hello,</span>
                <span className='displayName'></span>
            </div>
            <div style={{ marginTop: "5%" }}>

                <NavigationButton onClick={props.onselecting1} name="Profile Information" />
                <NavigationButton onClick={props.onselecting2} name="Address Information" />
            </div>

        </div>
    );
}

export default ProfileNav;