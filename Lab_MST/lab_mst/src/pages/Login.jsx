import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useAuthContext();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate("/");
    }
    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;