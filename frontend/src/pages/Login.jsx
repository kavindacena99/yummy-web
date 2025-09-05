import Authplate from "../components/Authplate";

function Login(){
    return(
        <div>
            <div className="flex justify-center items-center bg-amber-100 h-85">
                <h1 className="text-6xl font-extrabold text-green-300">🍴 Yummy Foods</h1>
            </div>
            <div className="flex justify-center items-center">
                <Authplate />
            </div>
        </div>
    );
}

export default Login;