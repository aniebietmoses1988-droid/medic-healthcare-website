
import { motion } from "motion/react";
import "./DoctorSection.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const smoothTransition = {
  duration: 0.6,
  ease: "easeOut",
};

function DoctorSection() {
  const doctors = [
    {
      image: "/images/doctor-1.jpg",
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      description:
        "Experienced cardiologist providing expert care for heart and cardiovascular conditions.",
    },
    {
      image: "/images/doctor-2.jpg",
      name: "Dr. Sarah Smith",
      specialty: "General Physician",
      description:
        "Dedicated physician focused on providing quality healthcare and personalized treatment.",
    },
    {
      image: "/images/doctor-3.jpg",
      name: "Dr. Michael Brown",
      specialty: "Neurologist",
      description:
        "Specialist in neurological care, diagnosis, and treatment of nervous system conditions.",
    },
  ];

  return (
    <section className="doctors" id="doctors">
      <div className="doctors-container">
        {/* Animated Heading */}
        <motion.div
          className="doctors-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...smoothTransition, delay: 0.1 }}
        >
          <p className="doctors-subtitle">OUR DOCTORS</p>

          <h2>
            Meet Our Experienced <span>Doctors</span>
          </h2>

          <p className="doctors-intro">
            Get quality healthcare from experienced professionals dedicated
            to your health and wellbeing.
          </p>
        </motion.div>

        {/* Animated Doctor Cards */}
        <motion.div
          className="doctors-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {doctors.map((doctor) => (
            <motion.div
              className="doctor-card"
              key={doctor.name}
              variants={fadeUp}
              transition={smoothTransition}
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
            >
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
              </div>

              <div className="doctor-content">
                <h3>{doctor.name}</h3>

                <p className="doctor-specialty">
                  {doctor.specialty}
                </p>

                <p className="doctor-description">
                  {doctor.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default DoctorSection;
