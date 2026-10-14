
import { Link, useParams } from "react-router-dom";

const services = {
  cardiology: {
    title: "Cardiology",
    description:
      "Our cardiology service focuses on the prevention, assessment, and treatment of heart-related conditions.",
    benefits: [
      "Heart health assessments",
      "Cardiovascular risk evaluation",
      "Guidance on maintaining a healthy heart",
    ],
  },

  "general-consultation": {
    title: "General Consultation",
    description:
      "Our general consultation service helps patients discuss their health concerns and receive appropriate medical guidance.",
    benefits: [
      "Initial health assessments",
      "Discussion of symptoms and concerns",
      "Guidance on appropriate next steps",
    ],
  },

  "emergency-care": {
    title: "Emergency Care",
    description:
      "Our emergency care service is designed to assess and respond to urgent medical needs.",
    benefits: [
      "Urgent medical assessment",
      "Initial emergency treatment",
      "Referral for further care when needed",
    ],
  },
};

function ServiceDetails() {
  const { serviceId } = useParams();
  const service = services[serviceId];

  if (!service) {
    return (
      <main className="service-details">
        <h1>Service not found</h1>
        <p>We couldn't find the service you're looking for.</p>
        <Link to="/#services">Back to Services</Link>
      </main>
    );
  }

  return (
    <main className="service-details">
      <Link to="/#services">← Back to Services</Link>

      <p className="service-details-label">OUR SERVICES</p>
      <h1>{service.title}</h1>
      <p>{service.description}</p>

      <h2>How We Can Help</h2>
      <ul>
        {service.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>

      <Link to="/contact" className="service-details-button">
        Contact Us
      </Link>
    </main>
  );
}

export default ServiceDetails;
