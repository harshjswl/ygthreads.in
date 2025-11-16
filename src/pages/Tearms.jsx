import React, { useEffect } from "react";
import "./Tearms.css";
import termsImg from "../assets/docu.png"; 

function Tearms() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="terms">
      <div className="terms-container">
        {/* Image Section */}
        <div className="terms-image fade-in">
          <img src={termsImg} alt="Terms and Conditions" />
        </div>

        {/* Text Section */}
        <div className="terms-content fade-in">
          <h1>Terms and Conditions</h1>

          <h2>Order Placement:</h2>
          <p>
            To place an order, please use the contact details provided in our
            website, including phone number, email, and social media platforms.
            All orders must be communicated through these official channels to
            ensure proper processing.
          </p>

          <h2>Response Time:</h2>
          <p>
            Our dedicated team will respond to all inquiries within 24 hours.
            During this communication, we will discuss current rates, which may
            vary according to market fluctuations.
          </p>

          <h2>Order Processing:</h2>
          <p>
            Once you confirm satisfaction with the discussed terms, we will
            initiate the order process within 1–2 business days after completing
            all necessary formalities.
          </p>

          <h2>Quality Assurance:</h2>
          <p>
            Before dispatching your parcel, each item is carefully weighed and
            accurately recorded in the invoice to ensure transparency and
            customer satisfaction.
          </p>

          <h2>Product Inspection and Replacement:</h2>
          <p>
            If the actual weight of the parcel differs from the invoice, or if
            any product is damaged upon receipt, please contact us immediately
            via phone or email. We will take prompt action to resolve the issue
            and provide a replacement if required.
          </p>

          <h2>Proof of Claim:</h2>
          <p>
            Please note that claims regarding damaged or incorrect items will
            only be addressed if sufficient proof, such as photographs or videos
            clearly showing the discrepancy or damage, is provided.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Tearms;
