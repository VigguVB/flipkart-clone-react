import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import "./Quick.css"
function Quick(props) {
    return (

        <div className="quicksearch  list">
            <div className="quickdiv">
                <img src="https://i.ibb.co/vzSkx4g/top.png" alt="Top Offers" />
                <ul>
                    <li className="menu">Offers</li>
                </ul>
            </div>
            <Link to='listing/1'>
                <div className="quickdiv">
                    <img src="https://i.ibb.co/q0f0jJj/grocery.png" alt="grocery" />
                    <ul>
                        <li className="menu">Groceries</li>
                    </ul>
                </div>
            </Link>

            <Link to="listing/2">
                <div className="quickdiv">
                    <img src="https://i.ibb.co/W6mj0C2/mobiles.png" alt="mobiles" />
                    <ul>
                        <li className="menu">Mobiles</li>
                    </ul>
                </div>
            </Link>
            <div id="fashions" className="quickdiv">
                <img src="https://i.ibb.co/HGsSH6n/fashion.png" alt="fashions" />
                <ul>
                    <li className="menu">Fashions <i className="fa fa-angle-down"></i></li>
                    <div>
                        <ul className="fashionHoverDiv list">

                            <li id="menTop"><Link to="listing/5">Men's Top wear</Link> <i className="fa fa-angle-right right"></i>
                                <ul className="menTopWear list">
                                    <li><Link to="listing/12">Men's T-Shirts</Link></li>
                                    <li><Link to="listing/13">Men's Casual-Shirts</Link></li>
                                    <li><Link to="listing/14">Men's Formal Shirts</Link></li>
                                    <li><Link to="listing/15">Men's Kurtas</Link></li>
                                    <li><Link to="listing/15">Men's Ethenic Sets</Link></li>
                                    <li><Link to="listing/16">Men's Blazers</Link></li>
                                </ul>
                            </li>
                            <li id="bottomMen">Men's Bottom wear <i className="fa fa-angle-right right"></i>
                                <ul className="menBottomWear list">
                                    <li><Link to="listing/17">Men's Jeans</Link></li>
                                    <li><Link to="listing/18">Men's Trousers</Link></li>
                                    <li><Link to="listing/19">Men's Trackpants</Link></li>
                                    <li><Link to="listing/20">Men's Shorts</Link></li>
                                    <li><Link to="listing/21">Men's Threeourths</Link></li>
                                </ul>
                            </li>

                            <li id="womenEthenic">Women Ethenic<i className="fa fa-angle-right right"></i>
                                <ul className="womenEthenicWear list">
                                    <li><Link to="listing/22">Women Sarees</Link></li>
                                    <li><Link to="listing/23">Women Kurtas & kurtis</Link></li>
                                    <li><Link to="listing/22">Women Sarees</Link></li>
                                    <li><Link to="listing/23">Women Kurtas & kurtis</Link></li>

                                </ul>
                            </li>
                        </ul>
                    </div>


                </ul>

            </div>
            <div id="electronics" className="quickdiv">
                <img src="https://i.ibb.co/pnkpFtb/electroinic.png" alt="electronics" />
                <ul>
                    <li className="menu">Electronics <i className="fa fa-angle-down"></i></li>
                    <ul className="elecHoverDiv list">
                        <li id="audio">Audio<i className="fa fa-angle-right right"></i>
                            <ul className="audio list">
                                <li><Link to="listing/24">Wired Headphones</Link></li>
                            </ul>
                        </li>
                        <li id="lap-desktop">Laptop & Desktop <i className="fa fa-angle-right right"></i>
                            <ul className="lap-desktop list">
                                <li><Link to="listing/25">Laptops</Link></li>
                                <li><Link to="listing/25">Gaming Laptops</Link></li>
                            </ul>
                        </li>
                    </ul>
                </ul>
            </div>
            <Link to="listing/26">
                <div id="home" className="quickdiv">

                    <img src="https://i.ibb.co/VC64x3K/furniture05.png" alt="home" />

                    <ul>

                        <li className="menu">Home</li>

                    </ul>

                </div>
            </Link>
            <Link to="listing/27">
                <div id="appliances" className="quickdiv">
                    <img src="https://i.ibb.co/PgcTtJH/appliance.png" alt="appliances" />
                    <ul>
                        <li className="menu">Appliances</li>

                    </ul>
                </div>
            </Link>
            <div className="quickdiv">
                <img src="https://i.ibb.co/mFd2KCk/11-plane-png-image.png" alt="travel" width="180px" />
                <ul>
                    <li className="menu">Travel</li>
                </ul>
            </div>
            {/* <div id="toys" className="quickdiv">
                <img src="https://i.ibb.co/6XL187h/dff3f7adcf3a90c6.png" alt="toys" />
                <ul>
                    <li style={{ marginLeft: "-15%" }} className="menu">Beauty,Toys & more <i className="fa fa-angle-down"></i></li>
                    <ul className="toysHoverDiv list">
                        <li><Link to='listing/4'>Beauty & Personal Care</Link></li>
                        <li>Men's Grooming</li>
                        <li>Food & Drinks</li>
                        <li>Nutrition & Health Care</li>
                        <li>Baby Care</li>
                        <li>Toys & school Supplies</li>
                        <li>Sports & Fitness</li>
                        <li>Books & Music</li>
                        <li>Stationery & Office Supplies</li>
                        <li>Auto Accesories</li>
                        <ul>
                        </ul>

                    </ul>
                </ul>
            </div> */}
        </div>


    );
}

export default Quick;