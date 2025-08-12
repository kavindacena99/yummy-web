import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SellerLogin from './pages/seller/Login';
import SellerSign from './pages/seller/Signup';
import CustomerSign from './pages/customer/Signup';
import CustomerLogin from './pages/customer/Login';
import SellerHome from './pages/seller/Home';
import CustomerHome from './pages/customer/Home';

function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sellerlogin" element={<SellerLogin />} />
                <Route path="/sellersign" element={<SellerSign />} />
                <Route path="/seller" element={<SellerHome />} />
                <Route path="/customerlogin" element={<CustomerLogin />} />
                <Route path="/customersign" element={<CustomerSign />} />
                <Route path="/customer" element={<CustomerHome/>} />
            </Routes>
        </Router>
    );
}


/*
<Route path="/register" element={} />
                <Route path="/sellerdashboard" element={} />
                <Route path="/customerdashboard" element={} />
*/
export default App;