import Searchbar from "./Searchbar";

function Navbar(){
    return(
        <div>
            <div className="navbar justify-between bg-green-300">
                <div>
                    <h1 className="nav-item text-xl font-bold">🍴 YummyFood</h1>
                </div>
                <div className="nav">
                    <h2 className="nav-item"><a href="">My Cart</a></h2>
                    
                    <button className="bg-red-500 text-white px-4 py-2 rounded">
                        Logout
                    </button>
                </div>
            </div>
            <Searchbar />
        </div>
    );
}

export default Navbar;