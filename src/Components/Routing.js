import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Profile from '../Account/Profile';
import Header from './Header';
import Footer from './Footer';
import AddressInfo from '../Account/AddressInfo';
import Profileinfo from '../Account/Profileinfo';

function Routing(props) {
    return (

        <div>
            <Header />
            <Routes>   
                        <Route path="/" element={<Home />} />
                        <Route path="profile" element={<Profile />} />
                        {/* <Route path='profile/profileInfo' element={<Profileinfo />} />
                        <Route path="profile/address" element={<AddressInfo />} />   */}
            </Routes>
             <Footer />
        </div>

    );
}

export default Routing;