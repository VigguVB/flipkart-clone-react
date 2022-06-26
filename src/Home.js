import { React, Fragment } from "react";

import DealsofDay from "./Components/DealsofDay";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Quick from "./Components/Quick";
import Slider from "./Components/Slider";
import Profile from "./Account/Profile";
import Login from "./Login/Login";

const Home = () => {
    
    return (
        <Fragment>  
                <Header />
                <Quick />
                <Slider />
                <DealsofDay />
        </Fragment>
    )
}

export default Home;