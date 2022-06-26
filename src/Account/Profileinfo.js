import React, { Fragment, useEffect, useState } from 'react';
import ViewButton from '../Components/ViewButton';

import './Profileinfo.css'
import ProfileNav from './ProfileNav';
function Profileinfo(props) {

    const [email, setEmail] = useState("true")
    const [enteredFirstName, setEnteredFirstName] = useState("")
    const [phone, setphone] = useState("")
    
    function submitHandler(e) {
        e.preventDefault()
    }
 

useEffect(()=>{
    let name = sessionStorage.getItem("userInfo").split(",")[0]
    let email = sessionStorage.getItem("userInfo").split(",")[1]
    let phone = sessionStorage.getItem("userInfo").split(",")[2]

    setEnteredFirstName(name)
    setphone(phone)
    setEmail(email)
},[])

    return (


        <div className='info_div'>
            <div className='edit_pro'>
                <span className='heading'>Personal Information</span>
                <form action='post' onSubmit={submitHandler} className='personal_form'>
                    Name: <input value={enteredFirstName} type="text" id="firstname" placeholder='First Name' />

                </form>
            </div>

            <div className='edit_pro'>
                <span className='heading'>Contact Information</span>
                <form className='personal_form'>
                    <div>
                    Email ID : <input type="email" id="firstname" value={email} placeholder='Email ID' />
                    </div>
                    <div>
                    Contact : <input type="Number" id="lastname" value={phone} placeholder='Mobile Number' />
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default Profileinfo;