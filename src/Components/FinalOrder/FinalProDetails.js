import React, { useState } from 'react';
import Header from '../Header';
import './Finalprodetails.css';
import { useNavigate } from 'react-router-dom'
import AddedAddress from '../../Account/AddedAddress';
import AddressInfo from '../../Account/AddressInfo';
let purl = "https://flipkart-api.herokuapp.com/placeorder";
let durl = "https://flipkart-api.herokuapp.com/deleteAllCart"

function FinalProDetails(props) {
    const navigate = useNavigate()
    const [btnshow, setbtnshow] = useState(true);
    const [addressError, setaddressError] = useState(false)
    let totalAmount = sessionStorage.getItem('amount');
    let name = sessionStorage.getItem("userInfo").split(',')[0]

    function placeorder() {
        let email = sessionStorage.getItem("userInfo").split(',')[1]
        let address = sessionStorage.getItem("address")

        if (address) {
            if (props.data.length < 1) {
                let obj = {
                    email: email,
                    address: address,
                    ordered_item_id: props.data[0].item.id,
                    Item_name: props.data[0].item.name,
                    price: props.data[0].item.new_price,
                    image: props.data[0].item.image_gallery[0],
                }
                console.log(obj)
                setbtnshow(false)
                fetch(purl, {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)

                }).then(res => {
                    console.log(res.status)
                    if (res.status === 200) {
                        navigate('/Orderplaced')
                    }
                }).then(fetch(durl, {
                    method: 'DELETE',
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify()
                }).then(res => {
                    console.log(res.status)
                    if (res.status === 200) {
                        sessionStorage.setItem("amount", 0)
                        sessionStorage.setItem("price", 0)
                        sessionStorage.setItem("length", 0)
                    }
                }
                ))
            } else {
                let itemsid = []
                let namearray = []
                let pricearray = []
                let images = []
                props.data.map((item) => {
                    itemsid.push(item.item.id)
                    namearray.push(item.item.name)
                    pricearray.push(item.item.new_price)
                    images.push(item.item.image_gallery[0])
                })
                let obj = {
                    email: email,
                    address: address,
                    ordered_item_id: itemsid,
                    Item_name: namearray,
                    price: pricearray,
                    image: images,
                }
                console.log(obj)
                setbtnshow(false)
                fetch(purl, {
                    method: 'POST',
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(obj)

                }).then(res => {
                    console.log(res.status)
                    if (res.status === 200) {
                        navigate('/Orderplaced')
                    }
                }).then(fetch(durl, {
                    method: 'DELETE',
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify()
                }).then(res => {
                    console.log(res.status)
                    if (res.status === 200) {
                        sessionStorage.setItem("amount", 0)
                        sessionStorage.setItem("price", 0)
                        sessionStorage.setItem("length", 0)
                    }
                }
                ))
            }
        } else {
            setaddressError(true)
            setTimeout(() => {
                setaddressError(false)
            }, 3000)
        }





    }
    const renderProducts = ({ data }) => {
        if (data) {
            return data.map((item) => {
                return (
                    <tr key={item._id}>
                        <td>{item.item.name}</td>
                        <td>{item.item.new_price}</td>
                    </tr>
                )
            })
        }
    }
    return (
        <>
            <Header />
            <div className='container' style={{ marginTop: "2%" }}>
                <div className="panel panel-primary">
                    <div id="headpanel" className="panel-heading">
                        <h2>Flipkart Checkout</h2>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered setting">
                            <thead>
                                <tr>
                                    <td>ITEMS</td>
                                    <td>AMOUNT</td>
                                </tr>
                            </thead>
                            <tbody>
                                {renderProducts(props)}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td style={{ fontSize: "25px", fontWeight: "bold" }}>Total Amount</td>
                                    <td style={{ fontSize: "25px", fontWeight: "bold", color: "hsl(120, 92%, 23%)" }}>₹ {totalAmount}</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div>
                            <div className='pane panel-info'>
                                <div style={{ textAlign: "center" }} className='panel-heading'>
                                    <h3>Hi {name}, we will deliver your order the the below address</h3>
                                </div>
                                <div className='panel-body'>
                                    <h2>Select Your Address</h2>
                                    <AddressInfo />
                                    {addressError && <h2 style={{ textAlign: "center", color: "red", marginTop: "1%" }}>Please Select Address for Order Delivery </h2>}

                                    {btnshow && <button onClick={placeorder} id="finalorder">PLACE ORDER</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default FinalProDetails;