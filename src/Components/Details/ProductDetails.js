import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import Detailed from './Detailed';
import './ProductDetails.css'

let url = `https://flipkart-api.herokuapp.com/details`

function ProductDetails(props) {

    let param = useParams()

    const [fetcheditem, setFetchedItem] = useState([])

    useEffect(() => {
        fetch(`${url}/${param.itemid}`)
            .then(res => res.json())
            .then((data) => {
                setFetchedItem([...fetcheditem, data[0]])
            })
    }, [])
    return (
        <>
            <Header />
            <>
                <Detailed items={fetcheditem} />
            </>
        </>
    );
}

export default ProductDetails;