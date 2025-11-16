import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Brand */}
        <div className="footer-brand">
          <h2>Y.G.Threads</h2>
          <p>Weaving strength, quality, and precision into every thread.</p>
        </div>

        {/* Middle Section: Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Right Section: Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: info@mywebsite.com</p>
          <p>Phone: +91 98765 43210</p>
          <div className="footer-social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Y.G.Threads. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
