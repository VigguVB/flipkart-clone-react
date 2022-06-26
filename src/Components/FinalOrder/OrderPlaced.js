import React from 'react';
import './placed.css'
import Header from '../Header';

function OrderPlaced(props) {
    return (
        <>
            <Header />
            <div id="placeddiv" >
                <h1 className='placedhead'>Order Placed</h1>
            </div>
        </>
    );
}

export default OrderPlaced;