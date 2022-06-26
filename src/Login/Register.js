import React, { useState, useEffect } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const url = "https://foodyapp-login.herokuapp.com/api/auth/register"

const getUsers = "https://foodyapp-login.herokuapp.com/api/auth/users"

let emails = []

function Register(props) {

    const navigate = useNavigate()

    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errormsg, setErrormsg] = useState(true);



    function submitHandler(e) {
        e.preventDefault()
    }

    function nameHandler(e) {
        setname(e.target.value)
    }

    function phoneHandler(e) {
        setPhone(e.target.value)
    }

    function emailHandler(e) {
        setEmail(e.target.value)
    }

    function passwordHandler(e) {
        setPassword(e.target.value)

    }

    useEffect(() => {
        fetch(getUsers)
            .then(res => res.json())
            .then((data) => {
                data.map((item) => {
                    emails.push(item.email)
                    return "ok"

                })
            })
    }, [])

    function signup() {
        const formdata = {
            name: name,
            email: email,
            password: password,
            phone: phone
        }

        console.log(emails)
        if (emails.indexOf(email) === -1) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formdata)
            })
                .then(res => {
                    console.log(res.status);
                    console.log(res.json())
                    setErrormsg(true)
                })
                .then(navigate('/login'))


        } else {
            setErrormsg(false)
        }
    }
    return (
        <div className='backdrop'>


            <div className="newcontainer">

                <div className="subContainer">
                    <h1>Register</h1>
                    <div className="info">
                        <span>
                            Get access to your Orders, Wishlist and Recommendations
                        </span>
                    </div>
                    <div id="logodiv">
                        <img src="https://i.ibb.co/7YQg0Ty/444-4447300-grocery-bag-clip-art.png" alt="cartLogo" />
                    </div>
                </div>
                <div className="maincontainer">
                    <form onSubmit={submitHandler} className="loginform">
                        <input onChange={nameHandler} placeholder="Enter Name" type="text" />
                        <input onChange={emailHandler} placeholder="Enter Email ID" type="text" />
                        <input onChange={passwordHandler} placeholder="Enter Password" type="password" />
                        <input onChange={phoneHandler} placeholder="Enter Phone Number" type="number" />
                        <div className="terms">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</div>
                        <button onClick={signup} className="login">SIGNUP</button>
                        {!errormsg && <p style={{ color: "red", marginTop: "2%", fontWeight: "600", textAlign: "center" }}>Email already registered !!</p>}
                    </form>
                </div>
            </div>
            <Link to="/">
                <div id="remove">
                    <span className='remove'>✕</span>
                </div>
            </Link>
        </div>
    );
}

export default Register;