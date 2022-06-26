import React, { Fragment, useState } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import './Profile.css'
import Profileinfo from './Profileinfo';
import ProfileNav from './ProfileNav';
import AddressInfo from './AddressInfo';
import Header from '../Components/Header';

function Profile(props) {
    const [showPersonal, setShowPersonal] = useState(false)
    const [showAddress, setShowAddress] = useState(false)
    const [background, setBackground] = useState(false)


    const loadHandler = () => {
        setShowPersonal(true)
    }


    const selectPersonal = () => {
        setShowPersonal(true)
        setShowAddress(false)

    }
    const selectAddress = () => {
        setShowAddress(true)
        setShowPersonal(false)
    }

    function backgroundHandler() {
        setBackground(true)
    }


    return (
        <>
            <Header />
            <div onLoad={loadHandler} className='profilediv'>
                <ProfileNav onselecting1={selectPersonal} onselecting2={selectAddress} />
                {showPersonal && <Profileinfo />}
                {showAddress && <AddressInfo />}


            </div>
        </>

    );
}

export default Profile;