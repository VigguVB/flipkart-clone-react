import React from 'react';
import './AddedAddress.css'

function AddedAddress(props) {
    const address = `${props.onsave.address} , ${props.onsave.locality} , ${props.onsave.city} , ${props.onsave.state1} - ${props.onsave.pincode}`
    return (
        <div className='maindiv'>
           <h3 className='type'>{props.onsave.placetype}</h3> 
           <h5 className='name'>{props.onsave.name}</h5>
           <h5 className='mobile'>+91{props.onsave.mobile}</h5>
           <h5 className='address'>{address}</h5>
        </div>
    );
}

export default AddedAddress;