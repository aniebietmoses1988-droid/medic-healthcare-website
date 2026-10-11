import "./DoctorSection.css";

function DoctorSection() {
  const doctors = [
    {
      image: "/Images/doctor-1.jpg",
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      description:
        "Experienced cardiologist providing expert care for heart and cardiovascular conditions.",
    },
    {
      image: "/Images/doctor-2.jpg",
      name: "Dr. Sarah Smith",
      specialty: "General Physician",
      description:
        "Dedicated physician focused on providing quality healthcare and personalized treatment.",
    },
    {
      image: "/Images/doctor-3.jpg",
      name: "Dr. Michael Brown",
      specialty: "Neurologist",
      description:
        "Specialist in neurological care, diagnosis, and treatment of nervous system conditions.",
    },
  ];

  return (
    <section className="doctors" id="doctors">
      <div className="doctors-container">

        <div className="doctors-header">
          <p className="doctors-subtitle">OUR DOCTORS</p>

          <h2>
            Meet Our Experienced <span>Doctors</span>
          </h2>

          <p className="doctors-intro">
            Get quality healthcare from experienced professionals dedicated
            to your health and wellbeing.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doctor) => (
            <div className="doctor-card" key={doctor.name}>

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

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default DoctorSection;