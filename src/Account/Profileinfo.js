import React, { Fragment, useState } from 'react';
import ViewButton from '../Components/ViewButton';

import './Profileinfo.css'
import ProfileNav from './ProfileNav';
function Profileinfo(props) {

    const[disabled,setDisabled] = useState(true)
    const[disabledcontact,setDisabledcontact] = useState(true)
    const[enteredFirstName, setEnteredFirstName] = useState("")
    const[enteredLastName, setEnteredLastName] = useState("")
    const[selectedGender, setSelectedgender] = useState("")
    const[savePersonalInfo, setSavePersonalInfo] = useState({})


    const clickEdit = ()=>{
        setDisabled(false)
    }
    const clickEditcontact = ()=>{
        setDisabledcontact(false)
    }
    const firstNameHandler = (e) =>{
        setEnteredFirstName(e.target.value)
        console.log(e.target.value)
    }
    const lastNameHandler = (e) =>{
        setEnteredLastName(e.target.value)
        console.log(e.target.value)
    }
    const genderHandler = (e) =>{
        setSelectedgender(e.target.value)
        console.log(e.target.value)
    }
    function submitHandler(e){
        e.preventDefault()
    }
    const savePersonalInfoHander = (e) =>{
        setSavePersonalInfo({...savePersonalInfo,
            id: Math.random(),
            first : enteredFirstName,
            second: enteredLastName,
            gender: selectedGender
        })
        
        console.log(`${enteredFirstName} ${enteredLastName} ${selectedGender}`)
        console.log(`${savePersonalInfo.first}`)
    }



    return (
    
  
        <div className='info_div'>
            <div className='edit_pro'>
                <span className='heading'>Personal Information</span>
                <span onClick={clickEdit} className='edit'>EDIT</span>
                <form action='post' onSubmit={submitHandler} className='personal_form'>
                    <input onChange={firstNameHandler} value={enteredFirstName} type="text" id="firstname" placeholder='First Name' disabled={disabled}/>
                    <input onChange={lastNameHandler} value={enteredLastName} type="text" id="lastname" placeholder='Last Name' disabled={disabled}/>
                    <select onChange={genderHandler} value={selectedGender} className='select_gender' disabled={disabled}>
                        <option>Select Gender</option>
                        <option>MALE</option>
                        <option>FEMALE</option>
                    </select>
                    
                </form>
                <div className='btns'>
                {!disabled && <ViewButton onClick={savePersonalInfoHander} name="SAVE"/>}
                </div>
                <div className='cancelbtns'>
                    {!disabled && <button className='cancel'>CANCEL</button>}
                </div>
            </div>

            <div className='edit_pro'>
                <span className='heading'>Contact Information</span>
                <span onClick={clickEditcontact} className='edit'>EDIT</span>
                <span className='edit'>Change-Password</span>
                <form className='personal_form'>
                    <input type="email" id="firstname" placeholder='Email ID' disabled={disabledcontact}/>
                    <input type="Number" id="lastname" placeholder='Mobile Number' max={10} disabled={disabledcontact}/>
                    
                </form>
                <div className='btns'>
                {!disabledcontact && <ViewButton name="SAVE"/>}
                </div>
                <div className='cancelbtns'>
                    {!disabledcontact && <button className='cancel'>CANCEL</button>}
                </div>
            </div>
        </div>
    );
}

export default Profileinfo;