
import React from "react";
import { motion } from "motion/react";
import "./Hero.css";

const textAnimation = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const smoothTransition = {
  duration: 0.7,
  ease: "easeOut",
};

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <motion.span
            className="hero-label"
            variants={textAnimation}
            initial="hidden"
            animate="visible"
            transition={{ ...smoothTransition, delay: 0.1 }}
          >
            YOUR HEALTH, OUR PRIORITY
          </motion.span>

          <motion.h1
            variants={textAnimation}
            initial="hidden"
            animate="visible"
            transition={{ ...smoothTransition, delay: 0.2 }}
          >
            Your Health Deserves
            <span> Exceptional Care.</span>
          </motion.h1>

          <motion.p
            variants={textAnimation}
            initial="hidden"
            animate="visible"
            transition={{ ...smoothTransition, delay: 0.35 }}
          >
            Your health deserves the best care. We provide
            professional medical services to help you live
            a healthier and happier life.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="hero-buttons"
            variants={textAnimation}
            initial="hidden"
            animate="visible"
            transition={{ ...smoothTransition, delay: 0.5 }}
          >
            <a href="#" className="hero-btn primary-btn">
              Request Appointment
              <span>→</span>
            </a>

            <a href="#" className="hero-btn secondary-btn">
              Learn More
              <span>↗</span>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="hero-stats"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.55,
                },
              },
            }}
          >
            {[
              ["10+", "Years of Experience"],
              ["5k+", "Happy Patients"],
              ["20+", "Expert Doctors"],
            ].map(([number, label], index) => (
              <React.Fragment key={label}>
                {index > 0 && (
                  <div className="stat-divider"></div>
                )}

                <motion.div
                  className="stat"
                  variants={textAnimation}
                  transition={smoothTransition}
                >
                  <h3>{number}</h3>
                  <p>{label}</p>
                </motion.div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <motion.div
            className="hero-image-bg"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          <motion.img
            src="/doctor.png"
            alt="Doctor wearing a white coat"
            className="doctor-image"
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="hero-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.7,
              ease: "easeOut",
            }}
          >
            <div className="hero-card-icon">+</div>
            <div>
              <h4>Professional Care</h4>
              <p>Your health matters to us</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
