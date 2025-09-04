import Cartitem from '../components/Cartitem';
import Itemcard from '../components/Itemcard';
import Navbar from '../components/Navbar';
import React from 'react';
import Profilecard from '../components/Profilecard';
import Footer from '../components/Footer';
import Categorycard from '../components/Categorycard';
//const navigate = useNavigate();

function Home(){
    return(
        <div>
            <Navbar />
            <h1>This is the home page</h1>
            <Categorycard />
            <Footer />
        </div>
    );
}

export default Home;
/*
<h1>You have to select seller or customer</h1> <br />
            <button onClick={() => window.location.href="/sellerlogin"}>Seller</button> <br />
            <button onClick={() => window.location.href="/customerlogin"}>Customer</button> <br />
*/