import { useState } from "react";

function Signup(){
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {

    }

    return(
        <div>
            <form>
                <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="First Name" />
                <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Last Name" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <input type="password" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} placeholder="Confirm Password" />
                <button onClick={handleSubmit}>Sign In</button>
            </form>
        </div>
    );
}

export default Signup;