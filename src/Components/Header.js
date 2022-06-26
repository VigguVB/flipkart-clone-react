import { React, useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'
import './Header.css'
import { useNavigate } from 'react-router-dom';

const url = "https://foodyapp-login.herokuapp.com/api/auth/userInfo"


function Header(props) {
    const navigate = useNavigate()

    const [count, setCount] = useState(0)

    const [userData, setUserData] = useState('')

    function loginHandler() {
        navigate("login")
    }

    function conditionalHeader() {
        if (userData.name) {
            let data = userData;
            let outArray = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userInfo', outArray);
            sessionStorage.setItem("loginStatus", true);

            return (
                <>
                    <button id="loginName">Hi {userData.name}</button>
                    <ul className="accountHoverDiv list">
                        <li><i className="fa fa-user-circle-o checked"></i><Link to='/profile'>My Profile</Link></li>
                        <li><i className="fa fa-bolt checked"></i> SuperCoin Zone</li>
                        <li><i className="fa fa-shopping-bag checked"></i><Link to="/myorders">My Orders</Link></li>
                        <li><i className="fa fa-heart checked"></i> Wishlist</li>
                        <li><i className="fa fa-comment checked"></i> My Chats</li>
                        <li><i className="fa fa-ticket checked"></i> Coupons</li>
                        <li><i className="fa fa-drivers-license checked"></i> Gift Cards</li>
                        <li onClick={handleLogout}><i className="fa fa-power-off checked"></i> Logout</li>
                    </ul>
                </>
            )
        } else {
            sessionStorage.setItem("loginStatus", false)
            return (
                <>
                    <span onClick={loginHandler} id="loginName">LOGIN</span>
                </>
            )
        }
    }

    function handleLogout() {
        sessionStorage.removeItem('ltk');
        sessionStorage.removeItem('userInfo');
        sessionStorage.setItem('loginStatus', false);
        setUserData("")
        navigate("/")
    }

    useEffect(() => {
        if (sessionStorage.getItem("length")) {
            setInterval(() => {
                setCount(sessionStorage.getItem("length"))
            }, 1000)

        }
        fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setUserData(data)
            })

    }, [])
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
                {conditionalHeader()}
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
                <Link to="/cart">
                    <span style={{ color: "white" }}>
                        <i className="fa fa-shopping-cart cartcontrol"></i>

                        <span id="loginName" style={{ textDecoration: "none" }}>Cart <span style={{ fontSize: "18px", backgroundColor: "red", marginTop: "-0.2%" }} class="badge badge-light">{count}</span></span>
                    </span>

                </Link>

            </div>

            <Outlet />


        </div>

    );
}

export default Header;