
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import DoctorSection from "./Components/DoctorSection";
import HealthPartners from "./Components/HealthPartners";
import ScrollToSection from "./Components/ScrollToSection";

import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <DoctorSection />
      <HealthPartners />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToSection />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
