function Profilecard(){
    return(
        <div>
            <div className="border rounded-xl w-3/5 mx-auto justify-center py-5">
                <div className="w-40 h-40 rounded-full mx-auto flex justify-center">
                    <img className="rounded-full border-4" src="https://www.dummyimg.in/placeholder?format=JPEG" alt="" />
                </div>
                <div className="justify-center mx-auto py-4 flex">
                    <h1 className="font-bold text-3xl">Kavinda Supun Dissanayake</h1>
                </div>
                <div className="ml-15">
                    <h1><span className="font-bold">Email:</span> kavindach4@gmail.com</h1>
                    <h1><span className="font-bold">Mobile No:</span> 0757380049</h1>
                    <h1><span className="font-bold">Address:</span> No 157, Heeeralugedara, Kotadeniyawa</h1>
                    <form className="py-2">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="Update your name" 
                                className="w-4/5 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <label className="block text-gray-700 font-semibold mb-1">Address</label>
                            <input 
                                type="text" 
                                placeholder="Update your address" 
                                className="w-4/5 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <label className="block text-gray-700 font-semibold mb-1">Email</label>
                            <input 
                                type="text" 
                                placeholder="Update your email" 
                                className="w-4/5 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                            <label className="block text-gray-700 font-semibold mb-1">Mobile No</label>
                            <input 
                                type="text" 
                                placeholder="Update your mobile number" 
                                className="w-4/5 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                            />
                        </div>
                        <button className="m-4 border rounded">Update</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Profilecard;