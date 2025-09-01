function Searchbar(){
    return(
        <div>
            <div className="searchbar flex justify-center py-2 bg-green-300">
                <form action="" method="get">
                    <input type="search" style={{ width:350 }} placeholder="Search...." className="border-1 bg-red-200 border-red-200 px-3 py-2 rounded" />
                    <button className="bg-red-200 rounded p-2 border-1 border-red-200" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
}

export default Searchbar;