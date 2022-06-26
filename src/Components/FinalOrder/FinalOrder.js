import React, { useEffect, useState } from 'react';
import FinalProDetails from './FinalProDetails';
let url;

function FinalOrder(props) {
    
    const [items, setItems] = useState([])
    useEffect(() => {
        let email = sessionStorage.getItem("userInfo").split(',')[1]
        url = `https://flipkart-api.herokuapp.com/cart?email=${email}`
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setItems(data)
            })
    }, [])
    return (
        <div>
            <FinalProDetails data={items} />
        </div>
    );
}

export default FinalOrder;