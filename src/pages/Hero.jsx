import React from "react";
import heroImg from "../assets/heroImg.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Premium Industrial <span>Yarn & Threads</span> for Every Need
        </h1>

        <p>
          Delivering high-strength, durable, and precision-crafted yarns trusted
          by manufacturers worldwide. From apparel to heavy-duty industrial
          applications — YG Threads ensures unmatched quality, consistency, and
          performance.
        </p>

        <a href="/products" className="hero-btn">
          Explore Our Products
        </a>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Industrial Yarn - YG Threads" />
      </div>
    </section>
  );
}

export default Hero;
