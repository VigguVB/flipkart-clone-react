import { isContentEditable } from '@testing-library/user-event/dist/utils';
import React from 'react';
import './Itemdisplay.css'

function ItemDisplay(props) {
    const items = ({itemData})=>{

        if(itemData[0]){
            return itemData[0].map((item)=>{
                return <div className='itembox'>
                    <div className='imgdiv'>
                        <img src={item.image} width="100%" height="390px" />
                    </div>
                    <h3 className='itemname'>{item.name}</h3>
                    <h4 className='qty'>{item.quantity}</h4>
                    <div>
                        <h3 className='newprice'>₹ {item.new_price}</h3>
                        <h3 className='oldprice'><strike>{item.old_price}</strike></h3>
                        <h3 className='offer'>{item.offer}</h3>
                    </div>
                    <h2 className='availability'>Available</h2>
                    <div className='divv'>
                   
                    <button className='addtowish'>ADD TO WISHLIST</button>
                    <button className='addtocart'>ADD TO CART</button>
                    </div>
                  
                </div>
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