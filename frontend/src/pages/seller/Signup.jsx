import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

function Signup(){
    const [fullname, setFullname] = useState("");
    const [businessname, setBusinessname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password != confirmpassword){
            setError("Passwords do not match!");
            return;
        }

        try{
            await API.post('/seller/register', { fullname, businessname, email, password });
            navigate('/sellerlogin');
        }catch(error){
            setError('Regstration unsuccessful');
        }
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="First Name" /> <br />
                <input type="text" value={businessname} onChange={(e) => setBusinessname(e.target.value)} placeholder="Last Name" /><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /><br />
                <input type="password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} placeholder="Confirm Password" /><br />
                <button>Sign In</button>
            </form>
        </div>
    );
}

export default Signup;