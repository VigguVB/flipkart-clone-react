import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import OrderDisplay from './OrderDisplay';

let url;

function ViewOrders(props) {

    const[orders, setOrders] = useState([])

    useEffect(()=>{
        let email= sessionStorage.getItem("userInfo").split(',')[1]
        url = `https://flipkart-api.herokuapp.com/vieworders?email=${email}`
        fetch(url)
        .then(res=>res.json())
        .then((data)=>{
            setOrders([data])
            console.log(data)
        })

    },[])
    return (
        <>
       <Header />
        <div>
            <OrderDisplay data={orders} />
        </div>
        </>
    );
}

export default ViewOrders;