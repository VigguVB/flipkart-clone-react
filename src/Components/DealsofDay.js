import React from 'react';
import './DealsofDay.css'
import ViewButton from './ViewButton';

const dealsofdaydata = [
    {
        id: 'd1',
        name: "Rice, Aata & more",
        description: "Best deals in Groceries",
        offer: "Upto 50% Off",
        image: "https://i.ibb.co/0j80r34/grocerydeal.jpg"
    },
    {
        id: 'd2',
        name: "Bestselling Wallets & Belts",
        description: "Wrogn, provogue & More",
        offer: "Upto 80% Off",
        image: "https://i.ibb.co/sm255W5/pursedeal.jpg"
    },
    {
        id: 'd3',
        name: "Casual Shoes for Men",
        description: "Sparx, Bata & More",
        offer: "Upto 50% Off",
        image: "https://i.ibb.co/0XHfWXx/shoedeal.jpg"
    },
    {
        id: 'd4',
        name: "Kurtas, Sets & More",
        description: "Libas, Aurelia & More",
        offer: "Upto 50% Off",
        image: "https://i.ibb.co/HK8KPYD/kurtadeal.jpg"
    },
    {
        id: 'd5',
        name: "Badminton Racquet & More",
        description: "Li-Ning, Yonex & more",
        offer: "Upto 70% Off",
        image: "https://i.ibb.co/JsNBXnC/raquetdeal.jpg"
    },
    {
        id: 'd6',
        name: "Best Sellings!",
        description: "Home & Kitchen Appliances",
        offer: "Upto 55% Off",
        image: "https://i.ibb.co/hcsNgDP/Kitchendeal.jpg"
    },
]

function DealsofDay(props) {
    return (
        <div className='main_container'>
            <div className='header'>
                <span className='heading'>Deals of the Day</span>
                <ViewButton name="VIEW ALL" />
            </div>
            <div className='item_display'>
                {dealsofdaydata.map((item) => {
                    return (
                        <div className='item_card'>
                            <img src={item.image} style={{ width: "100%", height: "200px" }} ></img>
                            <div style={{ textAlign: "center", marginTop: "6%" }}>
                                <span style={{ fontSize: "17px", fontWeight: "600" }}>{item.name}</span>
                            </div>
                            <div style={{ textAlign: "center", marginTop: "6%" }}>
                                <span style={{ fontSize: "17px", fontWeight: "600", color: "green" }}>{item.offer}</span>
                            </div>
                            <div style={{ textAlign: "center", marginTop: "6%" }}>
                                <span style={{ fontSize: "17px", fontWeight: "600", color: "gray" }}>{item.description}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default DealsofDay;