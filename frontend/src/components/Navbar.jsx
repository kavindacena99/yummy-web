import Searchbar from "./Searchbar";

function Navbar(){
    return(
        <div>
            <div className="navbar justify-between bg-green-300">
                <div>
                    <h2 className="nav-item">Logo</h2>
                </div>
                <ul className="nav">
                    <li className="nav-item font-semibold">Home</li>
                    <li className="nav-item font-semibold">About</li>
                    <li className="nav-item font-semibold">Contact</li>
                </ul>
                <div className="nav">
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