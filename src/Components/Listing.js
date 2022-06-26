import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemDisplay from './ItemDisplay';
import './Listing.css';
import Header from '../Components/Header'

let Url;

function Listing(props) {

    const [items, setItems] = useState([])
    const [itemNotAvailable, setItemNotAvailable] = useState(true)
    let params = useParams()
    Url = `https://flipkart-api.herokuapp.com/items/${params.id}`;

    useEffect(() => {
        fetch(Url)
            .then(res => res.json())
            .then((data) => {
                if (data.length > 0) {
                    setItems([...items, data])
                } else {

                    setItemNotAvailable(false)
                }

            })
    }, [])
    return (
        <>
            <Header />

            <div>
                <div className='filterdiv'>
                    <ul class="nav nav-tabs">

                        <li id="active" className="active"><a href="#"><Link to='/'>Home</Link></a></li>
                        <li><a href="#">ALL ITEMS</a></li>
                        <li><a href="#">PRICE LOW to HIGH</a></li>
                        <li><a href="#">PRICE HIGH to LOW</a></li>
                        <li><a href="#">SORT BY POPULARITY</a></li>
                        <li><a href="#">NEWEST FIRST</a></li>
                    </ul>
                </div>
                <div className='rightdiv'>
                    {itemNotAvailable ? <ItemDisplay itemData={items} /> : <h1 style={{ textAlign: "center" }}><i class="fa fa-meh-o" style={{ fontSize: "100px", marginTop: "-1.5%", position: "absolute", marginLeft: "-7%" }}></i>There are no items Available currently for the category choosed</h1>}
                </div>
            </div>
        </>
    );
}

export default Listing;