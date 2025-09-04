function Cartitem(){
    return(
        <div>
            <div className="border m-6 p-2 w-9/10 sm:w-3/4 2xl:w-1/2 cart-items-flex h-20">
                <img src="https://www.dummyimg.in/placeholder?format=JPEG" style={{ width:50, height:60 }} alt="Item" className="w-full h-40 object-cover rounded" />
                <h1 className="py-4.5 font-bold ml-1 sm:ml-5 md:ml-8">Item Name</h1>
                <h1 className="py-4.5 font-bold ml-1 sm:ml-5 md:ml-8">Unit Price</h1>
                <form className="py-4 ml-1 sm:ml-5 md:ml-8">
                    <input type="number" className="border rounded w-12 p-1" />
                </form>
                <h1 className="py-4.5 font-bold ml-1 sm:ml-5 md:ml-8">Total Price</h1>
                <button className="ml-1 sm:ml-5 md:ml-8 text-red-700">X</button>
            </div>
        </div>
    );
}

export default Cartitem;