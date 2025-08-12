import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from '../services/api';

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response = await API.post('/seller/login',{ email, password});
            navigate('/seller');
        }catch(error){
            if(error.message){
                setError(error.response.data.message || "Invalid Username and Password");
            }else{
                setError("Unable to connect to the server. Please try again later.");
            }
        }
    }

    return(
        <div>
            <h1>Seller Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" required /><br />
                <button>Login</button>
            </form>
            <h1>Don't have an account?</h1>
            <button onClick={() => window.location.href="/sellersign"}>Create a account</button>
        </div>
    );
}

export default Login;