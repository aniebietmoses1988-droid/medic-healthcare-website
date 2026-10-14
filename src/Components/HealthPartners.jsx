
import { motion } from "motion/react";
import "./HealthPartners.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const smoothTransition = {
  duration: 0.6,
  ease: "easeOut",
};

function HealthPartners() {
  const partners = [
    { name: "Shopcare", style: "shopcare" },
    { name: "CLINIZA", style: "cliniza" },
    { name: "FITbody", style: "fitbody" },
    { name: "Organica", style: "organica" },
    { name: "BMT", style: "bmt" },
  ];

  return (
    <section className="health-partners">
      <div className="partners-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            variants={fadeUp}
            transition={smoothTransition}
          >
            Our Health Partners
          </motion.h2>

          <motion.p
            className="partners-description"
            variants={fadeUp}
            transition={smoothTransition}
          >
            Research organizations that collaborate on medical research,
            healthcare innovation and the development of new medical
            technologies and treatments.
          </motion.p>
        </motion.div>

        <motion.div
          className="partners-logos"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
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
          {partners.map((partner) => (
            <motion.div
              className={`partner-logo ${partner.style}`}
              key={partner.name}
              variants={fadeUp}
              transition={smoothTransition}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
            >
              {partner.style === "shopcare" && (
                <span className="shopcare-icon">🛒</span>
              )}

              {partner.style === "fitbody" && (
                <span className="fitbody-icon">🏃</span>
              )}

              {partner.style === "organica" && (
                <span className="organica-icon">◈</span>
              )}

              <span>{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HealthPartners;
