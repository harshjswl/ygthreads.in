import React from "react";
import "./BestSellingProduct.css";
import p1 from "../assets/contact.png";
import p2 from "../assets/contact.png";
import p3 from "../assets/contact.png";

function BestSellingProduct() {
  return (
    <section className="bsp-section">
      <h2 className="bsp-title">Best Selling Products</h2>

      <div className="bsp-container">
        <div className="bsp-card">
          <img src={p1} alt="High Tenacity Yarn" />
          <h3>High Tenacity Polyester Yarn</h3>
          <p>Strong, durable yarn ideal for heavy industrial stitching.</p>
          <a href="/products" className="bsp-btn">
            View Product
          </a>
        </div>

        <div className="bsp-card">
          <img src={p2} alt="Sewing Thread" />
          <h3>Premium Sewing Thread</h3>
          <p>Smooth finish, high-strength thread for apparel manufacturing.</p>
          <a href="/products" className="bsp-btn">
            View Product
          </a>
        </div>

        <div className="bsp-card">
          <img src={p3} alt="Embroidery Thread" />
          <h3>Embroidery Thread</h3>
          <p>Vibrant color, soft texture, perfect for detailed designs.</p>
          <a href="/products" className="bsp-btn">
            View Product
          </a>
        </div>
      </div>
    </section>
  );
}

export default BestSellingProduct;
