
import React from 'react';
import { Link } from 'react-router-dom';
import './Itemdisplay.css'

function ItemDisplay(props) {

    function setItemID(id) {
        sessionStorage.setItem("itemId", id)
    }
    const items = ({ itemData }) => {

        if (itemData[0]) {
            return itemData[0].map((item) => {
                const newname = item.name.split("(")[0]


                return (<Link to={`/details/${item.id}`}>

                    <div onClick={(id) => { setItemID(item.id) }} key={item.id} className='itembox'>
                        <div className='imgdiv'>
                            <img src={item.image_gallery[0]} width="100%" height="300px" />
                        </div>
                        <h3 className='itemname'>{newname}</h3>
                        <div>
                            <h3 className='newprice'>₹ {item.new_price}</h3>
                            <h3 className='oldprice'><strike>{item.old_price}</strike></h3>
                            <h3 className='offer'>{item.offer}</h3>
                        </div>
                    </div>
                </Link>)

            })
        }

    }
    return (
        <div>
            {items(props)}
        </div>
    );
}

export default ItemDisplay;