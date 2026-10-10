import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-label">
            YOUR HEALTH, OUR PRIORITY
          </span>

          <h1>
            Every good thing starts with
            <span> good health.</span>
          </h1>

          <p>
            Your health deserves the best care. We provide
            professional medical services to help you live
            a healthier and happier life.
          </p>

          <div className="hero-buttons">
            <a href="#" className="hero-btn primary-btn">
              Request Appointment
              <span>→</span>
            </a>

            <a href="#" className="hero-btn secondary-btn">
              Learn More
              <span>↗</span>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="hero-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>

            <div className="stat-divider"></div>

            <div className="stat">
              <h3>5k+</h3>
              <p>Happy Patients</p>
            </div>

            <div className="stat-divider"></div>

            <div className="stat">
              <h3>20+</h3>
              <p>Expert Doctors</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <div className="hero-image-bg"></div>

          <img
            src="/doctor.png"
            alt="Doctor wearing a white coat"
            className="doctor-image"
          />

          <div className="hero-card">
            <div className="hero-card-icon">+</div>
            <div>
              <h4>Professional Care</h4>
              <p>Your health matters to us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;