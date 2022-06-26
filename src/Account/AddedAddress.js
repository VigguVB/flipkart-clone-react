import React from 'react';
import './AddedAddress.css'

function AddedAddress(props) {
    function addressHandler(e) {
        sessionStorage.setItem("address", e.target.value)
    }
    const renderAddress = ({ adressloader }) => {
        if (adressloader) {
            return adressloader.map((item) => {
                return <div key={item._id} className='maindiv'>
                    <input onChange={addressHandler} id="inputadd" type="radio" name="address" value={`${item.name}, ${item.address}, ${item.locality}, ${item.city}, ${item.state1}, ${item.pincode}, Contact: ${item.mobile}`} />
                    <h3 className='type'>{item.placetype}</h3>
                    <h5 className='name'>{item.name}</h5>
                    <h5 className='mobile'>+91{item.mobile}</h5>
                    <h5 className='address'>{item.address}, {item.locality}, {item.city}, {item.state1}, {item.pincode}</h5>
                </div>
            })
        }
    }
    return (
        <div>
            {renderAddress(props)}
        </div>
    );
}

export default AddedAddress;