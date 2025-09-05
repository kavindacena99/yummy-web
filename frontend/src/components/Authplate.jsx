import { useState } from "react";
import API from '../pages/services/api';

function Authplate() {
  const [activeTab, setActiveTab] = useState("customer");
  const [activeUser, setActiveUser] = useState("login");
  const [error, setError] = useState("");

  // seller
  const [sellermail, setSellerMail] = useState("");
  const [sellerpswd, setSellerPswd] = useState("");
  const [sellercpswd, setSellerCpswd] = useState("");
  const [fullname, setFullname] = useState("");
  const [businessname, setBusinessname] = useState("");

  // customer
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [customermail, setCustomerMail] = useState("");
  const [customerpswd, setCustomerPswd] = useState("");
  const [customercpswd, setCustomerCpswd] = useState("");

  // onSubmit={handleSellerSign}

  const handleSellerSign = async (e) => {
    e.preventDefault();

    if(sellercpswd != sellerpswd){
        setError("Passwords do not match!");
        return;
    }

    try{
        await API.post('/seller/register', { fullname, businessname, sellermail, sellerpswd });
        navigate('/sellerlogin');
    }catch(error){
        setError('Regstration unsuccessful');
    }
  }

  return (
    <div>
      <div className="w-96 bg-white rounded-lg shadow-md">
        {/* Tabs */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("customer")}
            className={`w-1/2 py-2 text-center font-semibold rounded-t-lg ${
              activeTab === "customer"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Customer Login
          </button>
          <button
            onClick={() => setActiveTab("seller")}
            className={`w-1/2 py-2 text-center font-semibold rounded-t-lg ${
              activeTab === "seller"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Seller Login
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === "customer" && (
            <div>
                <div className="flex">
                    <button 
                        onClick={() => setActiveUser("login")}
                        className={`w-1/2 py-2 text-center font-semibold rounded-t-lg ${
                        activeUser === "login"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}>Login</button>

                    <button 
                        onClick={() => setActiveUser("sign")}
                        className={`w-1/2 py-2 text-center font-semibold rounded-t-lg ${
                        activeUser === "sign"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}>Sign Up</button>
                </div>
                { activeUser === "login" && (
                    <form className="space-y-4">
                        <input
                            type="email"
                            value={customermail}
                            onChange={(e) => setCustomerMail(e.target.value)}
                            placeholder="Customer Email"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="password"
                            value={customerpswd}
                            onChange={(e) => setCustomerPswd(e.target.value)}
                            placeholder="Customer Password"
                            className="w-full p-2 border rounded"
                        />
                        <button className="w-full bg-green-500 text-white py-2 rounded">
                            Login as Customer
                        </button>
                    </form>
                )}
                { activeUser === "sign" && (
                    <form className="space-y-4">
                        <input
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            placeholder="First Name"
                            className="w-full p-2 border rounded" 
                        />
                        <input
                            type="text"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            placeholder="Last Name"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="email"
                            value={customermail}
                            onChange={(e) => setCustomerMail}
                            placeholder="Customer Email"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="password"
                            value={customerpswd}
                            onChange={(e) => setCustomerPswd(e.target.value)}
                            placeholder="Password"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="password"
                            value={customercpswd}
                            onChange={(e) => setCustomerCpswd(e.target.value)}
                            placeholder="Confirm Password"
                            className="w-full p-2 border rounded"
                        />
                        <button className="w-full bg-green-500 text-white py-2 rounded">
                            Sign Up as a Customer
                        </button>
                    </form>
                )}
                
            </div>
          )}

          {activeTab === "seller" && (
            <div>
                <div className="flex">
                    <button 
                        onClick={() => setActiveUser("login")}
                        className={`w-1/2 py-2 text-center font-semibold rounded-t-lg ${
                        activeUser === "login"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}>Login</button>

                    <button 
                        onClick={() => setActiveUser("sign")}
                        className={`w-1/2 py-2 text-center font-semibold rounded-t-lg ${
                        activeUser === "sign"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}>Sign Up</button>
                </div>
                { activeUser === "login" && (
                    <form className="space-y-4">
                        <input
                            type="email"
                            value={sellermail}
                            onChange={(e) => setSellerMail(e.target.value)}
                            placeholder="Seller Email"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="password"
                            value={sellerpswd}
                            onChange={(e) => setSellerPswd(e.target.value)}
                            placeholder="Password"
                            className="w-full p-2 border rounded"
                        />
                        <button className="w-full bg-green-500 text-white py-2 rounded">
                            Login as Seller
                        </button>
                    </form>    
                )}
                { activeUser=== "sign" && (
                    <form className="space-y-4" onSubmit={handleSellerSign}>
                        <input
                            type="text"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            placeholder="Full Name"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="text"
                            value={businessname}
                            onChange={(e) => setBusinessname(e.target.value)}
                            placeholder="Business Name"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="email"
                            value={sellermail}
                            onChange={(e) => setSellerMail(e.target.value)}
                            placeholder="Seller Email"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="password"
                            value={sellerpswd}
                            onChange={(e) => setSellerPswd(e.target.value)}
                            placeholder="Password"
                            className="w-full p-2 border rounded"
                        />
                        <input
                            type="password"
                            value={sellercpswd}
                            onChange={(e) => setSellerCpswd(e.target.value)}
                            placeholder="Confirm Password"
                            className="w-full p-2 border rounded"
                        />
                        <button className="w-full bg-green-500 text-white py-2 rounded">
                            Login as Seller
                        </button>
                    </form>
                )}
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
}

export default Authplate;
