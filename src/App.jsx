
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import DoctorSection from "./Components/DoctorSection";
import HealthPartners from "./Components/HealthPartners";
import ScrollToSection from "./Components/ScrollToSection";

import ContactPage from "./pages/Contactpage.jsx";
import LoginPage from "./pages/Loginpage.jsx";
import RegisterPage from "./pages/Registerpage.jsx";
import ServiceDetails from "./pages/ServiceDetails.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

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
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/services/:serviceId"
          element={<ServiceDetails />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
