import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import "./Cart.css";
import CartDetails from './CartDetails';

let url;

function Cart(props) {

    const [cart, setCart] = useState([])
    const [count, setCount] = useState(0)
    const [key, setkey] = useState("")


    function updateFunction(data) {
        setkey(data)
    }


    useEffect(() => {
        let email = sessionStorage.getItem("userInfo").split(',')[1]
        url = `https://flipkart-api.herokuapp.com/cart?email=${email}`
        setTimeout(() => {
            fetch(url)
                .then(res => res.json())
                .then((data) => {
                    setCart([data])
                    setCount(data.length)
                    sessionStorage.setItem("length", data.length)

                })
            console.log("useeffect")
        }, 1000)

    }, [key])
    return (
        <>
            <Header />
            <div>
                <CartDetails getUpdate={(data) => updateFunction(data)} cartlen={count} data={cart} />
            </div>
        </>

    );
}

export default Cart;