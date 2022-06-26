import React, { useState } from 'react';
import { useEffect } from 'react';
import './CartDetail.css';
import { Link } from 'react-router-dom'

let durl = "https://flipkart-api.herokuapp.com/deleteCart"

function CartDetails(props) {

    function placeorder() {
        let data = props.data[0]
        let array = []
        data.map((item) => {
            array.push(item.item.name.toString())
            return "ok"
        })
        sessionStorage.setItem("finalpro", array)
    }

    let amount = Number(sessionStorage.getItem("amount"))
    let price = Number(sessionStorage.getItem("price"))
    let discount = price - amount

    function deleteOrder(id, newPrice, oldPrice) {
        let new_amount = amount - Number(newPrice);
        let new_price = price - Number(oldPrice)
        sessionStorage.setItem("amount", new_amount)
        sessionStorage.setItem("price", new_price)
        console.log(id)
        fetch(`${durl}/${id}`,
            {
                method: "DELETE",
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify()
            }).then(res => console.log(res.status))
        let a = Math.random().toFixed(4)
        props.getUpdate(a)
    }

    const renderCart = ({ data }) => {
        if (data[0]) {
            return data[0].map((item) => {
                return <div id="itemcont" key={item._id}>
                    <div id='imgdiv'>
                        <img className='imagee' src={item.item.image_gallery[0]} width="200px" height="200px" max-height="200px" />
                    </div>
                    <div id="rightdiv2">
                        <h4>{item.item.name}</h4>
                        <h4 id="sellerdisp">Seller: {item.item.seller}</h4>
                        <div id="pricedivv">
                            <span>₹ {item.item.new_price}</span>
                            <span style={{ color: "gray" }}><del>{item.item.old_price}</del></span>
                            <span style={{ color: "#08ad08" }}>{item.item.offer}</span>
                            <button onClick={() => { deleteOrder(item.item.id, item.item.new_price, item.item.old_price) }} id="remove2">REMOVE</button>
                        </div>
                    </div>
                </div>
            })
        }
    }
    return (
        <div id='main'>
            <div id="left">
                <div id="head">
                    <h2>My Cart ({props.cartlen})</h2>
                </div>
                {renderCart(props)}

            </div>

            <div id="right">
                <div id="head2">
                    <h3>PRICE DETAILS</h3>
                </div>
                <div id="divtwo">
                    <table>
                        <tbody>
                            <tr>
                                <td>Price ({props.cartlen} item)</td>
                                <td>₹{price}</td>
                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td>{discount}</td>
                            </tr>
                            <tr>
                                <td>Delivery Charges</td>
                                <td style={{ color: "green" }}>FREE</td>
                            </tr>
                            <tr>
                                <td style={{ fontWeight: "bolder", fontSize: "20px" }}>Total Amount</td>
                                <td style={{ fontWeight: "bolder", fontSize: "20px" }}>₹{amount}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ marginTop: "5%" }}>
                        <span id="saving">You will save ₹{discount} on this order </span>
                    </div>
                </div>

            </div>
            <div>
                <Link to='/final'>
                    <button onClick={placeorder} id="placeorder">PLACE ORDER</button>
                </Link>
            </div>
        </div>
    );
}

export default CartDetails;