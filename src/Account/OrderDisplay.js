import React from 'react';
import './orderdisplay.css'

function OrderDisplay(props) {

    const renderOrders = ({ data }) => {
        if (data[0]) {
            return data[0].map((item) => {
                if (item.Item_name.length > 1) {
                    return <div className='itemcomp' key={item._id}>
                        <div className='imgcomp'>
                            <img src={item.image[0]} width="100%" height="300px" />
                        </div>
                        <div className='infocomp'>
                            <h3>ORDER ID: {item._id}</h3>

                            {item.Item_name[0] && <h5>Item 1: {item.Item_name[0]}</h5>}
                            {item.Item_name[1] && <h5>Item 2: {item.Item_name[1]}</h5>}
                            {item.Item_name[2] && <h5>Item 3: {item.Item_name[2]}</h5>}
                            {item.Item_name[3] && <h5>Item 4: {item.Item_name[3]}</h5>}
                            {item.Item_name[4] && <h5>Item 5: {item.Item_name[4]}</h5>}
                            <div id="smallimg">
                                {item.Item_name[0] && <img src={item.image[0]} width="100px" height="100px" />}
                                {item.Item_name[1] && <img src={item.image[1]} width="100px" height="100px" />}
                                {item.Item_name[2] && <img src={item.image[2]} width="100px" height="100px" />}
                                {item.Item_name[3] && <img src={item.image[3]} width="100px" height="100px" />}
                                {item.Item_name[4] && <img src={item.image[4]} width="100px" height="100px" />}
                            </div>
                        </div>

                    </div>
                } else {
                    return <div className='itemcomp' key={item._id}>
                        <div className='imgcomp'>
                            <img src={item.image} width="100%" height="300px" />
                        </div>
                        <div className='infocomp'>
                            <h3>ORDER ID: {item._id}</h3>
                            <h5>Item : {item.Item_name}</h5>
                        </div>
                    </div>

                }

            })
        }
    }
    return (
        <div id="main2">
            <div id="left2">
                <div className='panel panel-info'>
                    <div className='panel-heading'>
                        <h1 style={{ textAlign: "center" }}>My Orders</h1>
                    </div>
                </div>
                {renderOrders(props)}
            </div>
        </div>
    );
}

export default OrderDisplay;