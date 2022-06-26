import {React, useState, useEffect } from 'react';
import Searchdisplay from './Searchdisplay';
import './Search.css';
import Header from '../Header';
import { Link } from 'react-router-dom';
import JSON from '../Details/Data.json'

const Url = `https://flipkart-api.herokuapp.com/items`
function Search(props) {

    const [items, setItems] = useState([JSON])
    const [filteredData, setFilteredData] = useState([])

    const [itemNotAvailable, setItemNotAvailable] = useState(true)

    
    useEffect(() => {
        fetch(Url)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                    setItems([...items,data])
            })
            setTimeout(()=>{
                filterProduct()
            },1000)
    
    }, [])

    const filterProduct = () => {
        let keyword = sessionStorage.getItem("keyword");
        console.log(keyword)
        setTimeout(()=>{
            console.log(items)
            let output = items[0].filter((item) => {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
            })
            console.log(output)
            setFilteredData(output)
        },500)
       
    }

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
                 {items.length>1 ? <Searchdisplay itemData={filteredData} />:<h1>Loading....</h1>} 
            </div>
        </div>
    </>
    );
}

export default Search;