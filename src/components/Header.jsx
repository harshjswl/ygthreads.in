import React, { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? "hidden" : "auto";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };
  return (
    <>
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <header className="header">
        <div className="logo">
          <Link to="/home" onClick={closeMenu}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/terms" onClick={closeMenu}>Terms & Conditions</Link></li>
            <li><Link to="/products" onClick={closeMenu}>Products</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
          </ul>
        </nav>
        <div className="whatsapp">
          <h3>Join Us <FaWhatsapp /></h3>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>
    </>
  );
}



export default Header;