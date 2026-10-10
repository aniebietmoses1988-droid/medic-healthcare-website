import "./Services.css";

function Services() {
  const services = [
    {
      icon: "🩺",
      title: "General Consultation",
      description:
        "Get professional medical advice, diagnosis, and treatment from experienced healthcare professionals.",
    },
    {
      icon: "🚑",
      title: "Emergency Care",
      description:
        "Fast and reliable medical attention when you need urgent care and immediate assistance.",
    },
    {
      icon: "👨‍⚕️",
      title: "Specialist Care",
      description:
        "Access qualified specialists for expert care tailored to your specific health needs.",
    },
    {
      icon: "🔬",
      title: "Laboratory Services",
      description:
        "Accurate laboratory testing and reliable results to support better diagnosis and treatment.",
    },
    {
      icon: "💊",
      title: "Pharmacy Services",
      description:
        "Convenient access to prescribed medications and professional guidance from our pharmacy team.",
    },
    {
      icon: "❤️",
      title: "Health Checkups",
      description:
        "Regular health screenings designed to help you understand and maintain your overall wellbeing.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">

        <div className="services-header">
          <span className="services-label">OUR SERVICES</span>

          <h2>
            Quality Healthcare,
            <span> All in One Place</span>
          </h2>

          <p>
            We provide comprehensive healthcare services designed to keep you
            healthy, informed, and well cared for.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact" className="service-link">
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;