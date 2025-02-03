import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css"; // CSS dosyasını unutma

const RegisterPage = () => {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null); // Hata mesajı için state
    const [loading, setLoading] = useState(false); // Buton tıklamalarını engellemek için
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
    
        try {
            const response = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({ username, email, password }),
            });
    
            const data = await response.json(); // JSON yanıtını al
    
            if (!response.ok) {
                throw new Error(data.message || "Registration failed");
            }
    
            alert("✅ Registration successful! Redirecting to login...");
            setTimeout(() => {
                navigate("/login");
            }, 2000);
    
        } catch (error) {
            setError("❌ Registration failed. " + error.message);
            console.error("Registration error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <p className="error-message">{error}</p>} {/* Hata mesajı */}          
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
