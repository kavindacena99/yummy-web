function Footer(){
    return(
        <div>
            <footer className="bg-green-300 text-gray-800 py-6 mt-10">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                    {/* Logo / Brand */}
                    <h2 className="text-xl font-bold">🍴 YummyFood</h2>

                    {/* Navigation */}
                    <ul className="flex gap-6 mt-4 md:mt-0">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Menu</a></li>
                        <li><a href="#" className="hover:underline">About</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>

                    {/* Copyright */}
                    <p className="text-sm text-gray-600 mt-4 md:mt-0">
                    © {new Date().getFullYear()} Yummy Foods. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;