
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DoctorSection from "./components/DoctorSection";
import HealthPartners from "./components/HealthPartners";
import ScrollToSection from "./components/ScrollToSection";

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
