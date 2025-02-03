import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
    const [authToken, setAuthToken] = useState(localStorage.getItem("token"));

    return (
        <Router>
            <Navbar authToken={authToken} setAuthToken={setAuthToken} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage setAuthToken={setAuthToken} />} />
            </Routes>
        </Router>
    );
}

export default App;
