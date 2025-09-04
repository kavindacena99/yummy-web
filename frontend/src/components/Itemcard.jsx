function Itemcard(){
    return(
        <div>
            <div className="item-card border-1 p-4 m-4 w-80 h-125 rounded bg-green-500">
                <div>
                    <img src="https://dummyimage.com/600x600/000/eee.jpg" alt="Item" className="w-full h-40 object-cover rounded" />
                </div>
                <div className="font-bold py-2">
                    <h1 className="text-2xl">Item Name</h1>
                </div>
                <div className="text-lg">
                    <h1 className="m-2 text-0.5xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo laborum odio dolore possimus maxime minus cum voluptates reiciendis accusantium facere.</h1>
                </div>
                <div className="flex">
                    <h1 className="m-2 text-xl">$100.00</h1>
                    <a href="" className="border ml-8 rounded p-2 bg-red-400 text-white">Add to Cart</a>
                </div>
            </div>
        </div>
    );
}

export default Itemcard;