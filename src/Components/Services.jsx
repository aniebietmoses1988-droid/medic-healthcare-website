
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./Services.css";

const textAnimation = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const smoothTransition = {
  duration: 0.6,
  ease: "easeOut",
};

function Services() {
  const services = [
    {
      id: "general-consultation",
      icon: "🩺",
      title: "General Consultation",
      description:
        "Get professional medical advice, diagnosis, and treatment from experienced healthcare professionals.",
    },
    {
      id: "emergency-care",
      icon: "🚑",
      title: "Emergency Care",
      description:
        "Fast and reliable medical attention when you need urgent care and immediate assistance.",
    },
    {
      id: "specialist-care",
      icon: "👨‍⚕️",
      title: "Specialist Care",
      description:
        "Access qualified specialists for expert care tailored to your specific health needs.",
    },
    {
      id: "laboratory-services",
      icon: "🔬",
      title: "Laboratory Services",
      description:
        "Accurate laboratory testing and reliable results to support better diagnosis and treatment.",
    },
    {
      id: "pharmacy-services",
      icon: "💊",
      title: "Pharmacy Services",
      description:
        "Convenient access to prescribed medications and professional guidance from our pharmacy team.",
    },
    {
      id: "health-checkups",
      icon: "❤️",
      title: "Health Checkups",
      description:
        "Regular health screenings designed to help you understand and maintain your overall wellbeing.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        {/* Animated Section Heading */}
        <motion.div
          className="services-header"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="services-label">OUR SERVICES</span>

          <h2>
            Quality Healthcare,
            <span> All in One Place</span>
          </h2>

          <p>
            We provide comprehensive healthcare services designed to keep you
            healthy, informed, and well cared for.
          </p>
        </motion.div>

        {/* Animated Service Cards */}
        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {services.map((service) => (
            <motion.div
              className="service-card"
              key={service.id}
              variants={textAnimation}
              transition={smoothTransition}
            >
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <Link
                to={`/services/${service.id}`}
                className="service-link"
              >
                Learn More <span>→</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
