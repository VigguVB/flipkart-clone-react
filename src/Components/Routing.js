import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Profile from '../Account/Profile';
import Header from './Header';
import Footer from './Footer';
import AddressInfo from '../Account/AddressInfo';
import Profileinfo from '../Account/Profileinfo';
import Listing from './Listing';
import ProductDetails from './Details/ProductDetails';
import Login from '../Login/Login';
import Cart from '../Cart/Cart';
import FinalOrder from './FinalOrder/FinalOrder';
import OrderPlaced from './FinalOrder/OrderPlaced';
import Register from '../Login/Register';
import ViewOrders from '../Account/ViewOrders';

function Routing(props) {
    return (

        <div>


            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="listing" element={<Listing />} />
                <Route path="listing/:id" element={<Listing />} />
                <Route path="details" element={<ProductDetails />} />
                <Route path="cart" element={<Cart />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Register />} />
                <Route path="details/:itemid" element={<ProductDetails />} />
                <Route path="final" element={<FinalOrder />} />
                <Route path="Orderplaced" element={<OrderPlaced />} />
                <Route path="myorders" element={<ViewOrders />} />

                {/* <Route path='profile/profileInfo' element={<Profileinfo />} />
                        <Route path="profile/address" element={<AddressInfo />} />   */}
            </Routes>
            <Footer />
        </div>

    );
}

export default Routing;