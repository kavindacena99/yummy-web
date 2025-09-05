import Itemcard from '../components/Itemcard';
import Navbar from '../components/Navbar';
import React from 'react';
import Footer from '../components/Footer';
import Categorycard from '../components/Categorycard';

function Home(){
    return(
        <div>
            <Navbar />
            <h1 className='font-bold text-3xl p-5'>Flash Foods</h1>
            <div className='ml-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <Itemcard />
                <Itemcard />
                <Itemcard />
                <Itemcard />
                <Itemcard />
                <Itemcard />
            </div>
            <h1 className='font-bold text-3xl p-5'>Categories</h1>
            <div className='ml-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                <Categorycard />
                <Categorycard />
                <Categorycard />
                <Categorycard />
                <Categorycard />
            </div>
            <h1 className='font-bold text-3xl p-5'>Just for you</h1>
            <div className='ml-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <Itemcard />
                <Itemcard />
                <Itemcard />
                <Itemcard />
            </div>
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