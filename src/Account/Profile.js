import React, { Fragment, useState } from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import './Profile.css'
import Profileinfo from './Profileinfo';
import ProfileNav from './ProfileNav';
import AddressInfo from './AddressInfo';

function Profile(props) {
    const[showPersonal, setShowPersonal]=useState(false)
    const[showAddress, setShowAddress]=useState(false)

    const loadHandler = ()=>{
        setShowPersonal(true)
    }


    const selectPersonal = () =>{
        setShowPersonal(true)
        setShowAddress(false)
        console.log("Hoo==")
    }
    const selectAddress = () =>{
        setShowAddress(true)
        setShowPersonal(false)
    }
    


    return (
        <div onLoad={loadHandler} className='profilediv'>
              <ProfileNav onselecting1={selectPersonal} onselecting2={selectAddress} />
         
                {/* <Routes>
                    <Route path="/" element={<Profileinfo />} />
                     <Route exact path="profileInfo" element={<Profileinfo />} />
                    <Route exact path="address" element={<AddressInfo />} /> 
                </Routes> */}
                {showPersonal && <Profileinfo />}
                {showAddress && <AddressInfo />}
      
               
        </div>

    );
}

export default Profile;