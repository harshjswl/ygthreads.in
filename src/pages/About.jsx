import React, { useEffect } from "react";
import "./About.css";
import factoryImg from "../assets/factory.jpg";
import experienceImg from "../assets/experince.png";


function About() {
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

    <section className="about">

      <div className="about-container">

        {/* Images on top */}
        <div className="about-images fade-in">
          <div className="image-box">
            <img src={factoryImg} alt="YG Threads Factory" />
            <p>Our Factory</p>
          </div>
          <div className="image-box">
            <img src={experienceImg} alt="10 Years of YG Threads" />
            <p>10+ Years of Excellence</p>
          </div>
        </div>
        {/* Text Section */}
        <div className="about-content fade-in">
          <h1>
            About <span>YG Threads</span>
          </h1>
          <p>
            Welcome to <strong>YG Threads</strong> — where quality meets style.
            With over a decade of expertise in the thread and textile industry,
            YG Threads has established itself as a trusted name synonymous with
            excellence, innovation, and customer satisfaction.
          </p>
          <h2>Our Journey of Excellence</h2>
          <p>
            For the past 10 years, YG Threads has been dedicated to crafting
            premium-quality threads that combine durability with unmatched
            style. Our passion for precision and commitment to excellence have
            allowed us to grow into a brand that customers trust and love.
          </p>
          <h2>Our Collection</h2>
          <p>
            From everyday casual wear to elegant formal attire, YG Threads
            offers a comprehensive collection designed to meet diverse fashion
            needs. Whether you’re searching for timeless essentials or
            statement-making pieces, our range caters to every style and
            occasion.
          </p>
          <h2>Uncompromising Quality</h2>
          <p>
            At YG Threads, quality is at the core of everything we do. Every
            thread we produce undergoes a meticulous crafting process to ensure
            superior texture, strength, and longevity — garments that truly
            stand the test of time.
          </p>
          <h2>Affordable Luxury</h2>
          <p>
            We believe that true style should be accessible to everyone. That’s
            why we offer our premium-quality threads at competitive prices —
            allowing you to experience luxury without compromise.
          </p>
          <h2>Customer-Centric Values</h2>
          <p>
            Our customers are the heart of our brand. We are committed to
            providing exceptional service, personalized support, and a seamless
            shopping experience that makes every interaction with YG Threads
            memorable.
          </p>
          <h2>Built on Trust and Loyalty</h2>
          <p>
            Over the years, we have built enduring relationships with our
            customers based on trust, reliability, and loyalty. Many of our
            valued clients continue to be part of the YG Threads family — a
            testament to our unwavering quality and service.
          </p>
          <h2>Driven by Innovation and Trends</h2>
          <p>
            Fashion is ever-evolving, and so are we. YG Threads continuously
            adapts to the latest trends, designs, and technologies to bring you
            fresh, modern, and trend-setting products that keep you ahead in
            style.
          </p>
          <h2>Beyond Threads — A Community</h2>
          <p>
            At YG Threads, we’re more than just a brand; we’re a community that
            celebrates creativity, individuality, and self-expression. Join us
            as we continue to weave together fashion, innovation, and
            connection.
          </p>
        </div>
      </div>
    </section>
  );
}
export default About;
