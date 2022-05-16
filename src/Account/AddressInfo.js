import React, { useState } from 'react';
import './AddressInfo.css';
import ViewButton from '../Components/ViewButton';
import AddedAddress from './AddedAddress';

function AddressInfo(props) {
    const [enteredFirstName, setEnteredFirstName] = useState("")
    const [enteredMobile, setEnteredMobile] = useState("")
    const [enteredPincode, setEnteredPincode] = useState("")
    const [enteredLocality, setEnteredLocality] = useState("")
    const [enteredAddress, setEnteredAddress] = useState("")
    const [enteredCity, setEnteredCity] = useState("")
    const [enteredState, setEnteredstate] = useState("")
    const [enteredPlaceType, setenteredPlaceType] = useState("")

    const [showAddForm, setShowAddForm] = useState(false)
    const [storeAddress, setStoreAddress] = useState({})
    const [displaySavedAddress, setDisplaySavedAddress] = useState(false)
    function showForm() {
        setShowAddForm(true)
    }
    function cancelForm() {
        setShowAddForm(false)
    }
    function storeData() {
        setStoreAddress({
            ...storeAddress,
            name: enteredFirstName,
            mobile: enteredMobile,
            pincode: enteredPincode,
            locality: enteredLocality,
            address: enteredAddress,
            city: enteredCity,
            state1: enteredState,
            placetype: enteredPlaceType
        }

        )
        setDisplaySavedAddress(true)
    }

    function firstNameHandler(e) {
        setEnteredFirstName(e.target.value)
    }
    function mobileHandler(e) {
        setEnteredMobile(e.target.value)
    }
    function pincodeHandler(e) {
        setEnteredPincode(e.target.value)
    }
    function LocalityHandler(e) {
        setEnteredLocality(e.target.value)
    }
    function addressHandler(e) {
        setEnteredAddress(e.target.value)
    }
    function cityHandler(e) {
        setEnteredCity(e.target.value)
    }
    function stateHandler(e) {
        setEnteredstate(e.target.value)
    }
    function placetypeHandler(e) {
        setenteredPlaceType(e.target.value)
    }



    return (
        <div className='info_div1'>
            <div className='edit_pro1'>
                <div>
                    <span className='heading1'>Manage Addresses</span>
                    <span onClick={showForm} className='edit1'> <strong>+</strong> ADD A NEW ADDRESS</span>
                </div>


                {showAddForm && <form action='post' className='personal_form'>
                    <input onChange={firstNameHandler} value={enteredFirstName} type="text" id="firstname1" placeholder='First Name' />
                    <input onChange={mobileHandler} value={enteredMobile} type="number" id="mobile" placeholder='10-digit mobile number' />
                    <input onChange={pincodeHandler} value={enteredPincode} type="number" id="pincode" placeholder='Pincode' />
                    <input onChange={LocalityHandler} value={enteredLocality} type="text" id="locality" placeholder='Locality' />
                    <textarea onChange={addressHandler} value={enteredAddress} type="text" rows={5} id="address" placeholder='Address (Area & Street)' />
                    <input onChange={cityHandler} value={enteredCity} type="text" id="city" placeholder='City' />
                    <input onChange={stateHandler} value={enteredState} type="text" id="state" placeholder='State' />
                    <select onChange={placetypeHandler} value={enteredPlaceType}>
                        <option>--SELECT--</option>
                        <option>HOME</option>
                        <option>WORK</option>

                    </select>



                </form>}
                <div className='btns'>
                    {showAddForm && <ViewButton onClick={storeData} name="SAVE" />}
                </div>
                <div className='cancelbtns'>
                    {showAddForm && <button onClick={cancelForm} className='cancel'>CANCEL</button>}
                </div>
                <div className='reflectAddress'>
                    {displaySavedAddress && <AddedAddress onsave={storeAddress} />}
                </div>
            </div>

        </div>
    );
}

export default AddressInfo;