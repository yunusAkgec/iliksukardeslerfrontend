import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaShoppingCart, FaUser, FaSearch, FaWhatsapp, FaHeadset, FaBars } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Üst Çubuk */}
      <div className="top-bar">
        <span><FaWhatsapp className="icon" /> 0 (554) 499 81 68</span>
        <span><FaHeadset className="icon" /> 0216 471 05 42</span>
      </div>

    <div className="navbar">
        {/* Üst Satır */}
         <div className="navbar-top">
        <div className="menu-icon">
         <FaBars />
    </div>

    <div className="logo">
      <Link to="/">
        <span className="orange">ILIKSU</span>
        <span className="blue">KARDEŞLER</span>
      </Link>
    </div>

    <div className="icons">
      <button className="icon-button dark"><FaPhone /></button>
      <button className="icon-button orange"><FaUser /></button>
      <button className="icon-button blue">
        <FaShoppingCart />
        <span className="cart-badge">0</span>
      </button>
    </div>
  </div>

  {/* Alt Satır: Arama Çubuğu */}
  <div className="search-bar">
    <input type="text" placeholder="Ne aramıştınız ? Örn: Akü, Triger Seti" />
    <button><FaSearch /></button>
  </div>
</div>
    </div>
  );
};

export default Navbar;

/*
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ authToken, setAuthToken }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setAuthToken(null);
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">Ilıksu Kardeşler</Link>
                <ul className="nav-links">
                    <li><Link to="/">Ana Sayfa</Link></li>
                    <li><Link to="/products">Ürünler</Link></li>
                    <li><Link to="/categories">Kategoriler</Link></li>
                    <li><Link to="/cart" className="cart-icon">🛒 Sepet</Link></li>
                    {!authToken ? (
                        <>
                            <li><Link to="/login" className="nav-btn">Üye Girişi</Link></li>
                            <li><Link to="/register" className="nav-btn">Kayıt Ol</Link></li>
                        </>
                    ) : (
                        <li><button onClick={handleLogout} className="logout-btn">Çıkış Yap</button></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;*/