import Navbar from '../components/Navbar';
import Productdescription from '../components/Productdescription';
import Productdetail from '../components/Productdetail';

function Product(){
    return(
        <div>
            <Navbar />
            <div className='m-8'>
                <Productdetail />
                <h1 className='text-xl font-bold py-2'>Item Description</h1>
                <Productdescription />
            </div>
        </div>
    );
}

export default Product;

/*
<img src="https://placehold.co/600x400" alt="" />
                <div className='m-5'>
                    <form>
                        <h1 className='text-2xl font-bold py-4'>Item Name</h1>
                        <input type="number" className='bg-amber-200' /><br />
                        <button className='border rounded-xl m-3 p-2'>Add to Cart</button>
                    </form>
                </div>
*/