import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Stil dosyası

const LoginPage = ({ setAuthToken }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ username, password }),
                credentials: "include"
            });

            const text = await response.text(); // Yanıtı JSON veya text olarak oku
            let data;
    
            try {
                data = JSON.parse(text);
            } catch (e) {
                throw new Error("Invalid response format");
            }
    

            if (!response.ok) {
                throw new Error("Invalid username or password");
            }

            
            localStorage.setItem("token", data.token); // Token'ı kaydet
            navigate("/dashboard"); // Giriş başarılıysa ana sayfaya yönlendir
        } catch (error) {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {error && <p className="error-message">❌ {error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
