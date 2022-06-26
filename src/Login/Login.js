import { React, useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const url = "https://foodyapp-login.herokuapp.com/api/auth/login"


function Login(props) {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    function submitHandler(e) {
        e.preventDefault()
    }

    function login() {
        let logindata = {
            email: email,
            password: password
        }

        fetch(url, {
            method: "POST",
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(logindata)

        }).then(res => res.json())
            .then((data) => {
                if (data.auth === false) {
                    setMessage(data.token)
                } else {
                    sessionStorage.setItem('ltk', data.token)
                    sessionStorage.setItem('amount', 0)
                    sessionStorage.setItem('price', 0)
                    let attempt = sessionStorage.getItem("attempted")
                    let itemid = sessionStorage.getItem("itemId")
                    if (attempt) {
                        navigate(`/details/${itemid}`)
                    } else {
                        navigate('/')
                        sessionStorage.setItem("length", 0)
                    }
                }
            })
    }

    return (
        <div className='backdrop'>
            <div className="newcontainer">
                <div className="subContainer">
                    <h1>Login</h1>
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
                        <input onChange={emailHandler} placeholder="Enter Email ID" type="text" />
                        <input onChange={passwordHandler} placeholder="Enter Password" type="password" />
                        <div className="forgotpass">Forgot Password ?</div>
                        <div className="terms">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</div>
                        <button onClick={login} className="login">LOGIN</button>
                        <Link to="/signup">
                            <div className="signuplink">
                                New to Flipkart? Create an account
                            </div>
                        </Link>
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

export default Login;