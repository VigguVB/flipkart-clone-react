 import React from 'react';
 import {Link, Outlet} from 'react-router-dom'
import Footer from './Footer';
 import './Header.css'
 function Header(props) {
     return (
        <div className='headerdiv'>
             <div id="name">
            <i>Flipkart</i>
        </div>
        <div id="tagname">
            <i>Explore Plus</i>
        </div>
        <div id="searchdiv">
            <input id="searchbar" placeholder="Search for products, brands and more" />
            <i className="fa fa-search checked"></i>
        </div>
        <div id="account">
            <span id="loginName">My Account</span>
            <ul className="accountHoverDiv list">
                <li><i className="fa fa-user-circle-o checked"></i><Link to='profile'>My Profile</Link></li>
                <li><i className="fa fa-bolt checked"></i> SuperCoin Zone</li>
                <li><i className="fa fa-shopping-bag checked"></i> Orders</li>
                <li><i className="fa fa-heart checked"></i> Wishlist</li>
                <li><i className="fa fa-comment checked"></i> My Chats</li>
                <li><i className="fa fa-ticket checked"></i> Coupons</li>
                <li><i className="fa fa-drivers-license checked"></i> Gift Cards</li>
                <li><i className="fa fa-power-off checked"></i> Logout</li>
            </ul>
        </div>
        <div id="more">
            <span>More <i className="fa fa-angle-down"></i></span>
            <ul class="moreHoverDiv  list">
                <li><i className="fa fa-bell-o checked"></i> Notifications</li>
                <li><i className="fa fa-briefcase checked"></i>Sell on Flipkart</li>
                <li><i className="fa fa-headphones checked"></i>24 x 7 Customer Care</li>
                <li><i className="fa fa-line-chart checked"></i>Advertise</li>
                <li><i className="fa fa-download checked"></i>Download App</li>
            </ul>

        </div>
        <div id="cart">
            <i className="fa fa-shopping-cart cartcontrol"></i>
                <span>Cart</span>
        </div>
       
        <Outlet />
        
    
        </div>
        
     );
 }
 
 export default Header;