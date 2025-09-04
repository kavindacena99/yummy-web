import Cartitem from '../components/Cartitem';
import Itemcard from '../components/Itemcard';
import Navbar from '../components/Navbar';
import React from 'react';
import Profilecard from '../components/Profilecard';
//const navigate = useNavigate();

function Home(){
    return(
        <div>
            <Navbar />
            <Itemcard />
            <h1>This is the home page</h1>
            <h1>You have to select seller or customer</h1> <br />
            <button onClick={() => window.location.href="/sellerlogin"}>Seller</button> <br />
            <button onClick={() => window.location.href="/customerlogin"}>Customer</button> <br />
            <Profilecard />
        </div>
    );
}

export default Home;