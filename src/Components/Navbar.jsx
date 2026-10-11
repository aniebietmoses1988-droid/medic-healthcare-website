
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/#home" className="navbar-logo">
        <span className="logo-text">Medic</span>
        <span className="logo-plus">+</span>
      </Link>

      {/* Navigation */}
      <ul className="nav-links">
        <li>
          <Link to="/#home">Home</Link>
        </li>

        <li>
          <Link to="/#services">Services</Link>
        </li>

        <li>
          <Link to="/#doctors">Our Doctors</Link>
        </li>
      </ul>

      {/* Right side */}
      <div className="nav-actions">
        <Link to="/login" className="login-button">
          Login
        </Link>

        <Link to="/contact" className="contact-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;