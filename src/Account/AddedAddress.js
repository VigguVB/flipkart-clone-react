import React from 'react';
import './AddedAddress.css'

function AddedAddress(props) {
    console.log(props.adressloader.address)
    console.log("added address rendered")
    const renderAddress = ({adressloader})=>{
        console.log(adressloader)
        if(adressloader[0]){
            console.log(adressloader[0])
            // const address = `${adressloader[0].address} , ${adressloader[0].locality} , ${adressloader[0].city} , ${adressloader[0].state1} - ${adressloader[0].pincode}`;

            return adressloader[0].map((item)=>{
                return <div key={item._id} className='maindiv'>
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