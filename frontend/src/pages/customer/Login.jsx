import { useState } from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {

    }

    return(
        <div>
            <h1>Customer Login</h1>
            <form>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" /><br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" /><br />
                <button onSubmit={handleSubmit}>Login</button>
            </form>
            <h1>Don't have an account?</h1>
            <button onClick={() => window.location.href="/customersign"}>Create a account</button>
        </div>
    );
}

export default Login;