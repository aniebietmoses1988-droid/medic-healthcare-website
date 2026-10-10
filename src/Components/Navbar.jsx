
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
        <Link to="/login" className="login-link">
          Login
        </Link>

        <button
          className="search-button"
          aria-label="Search"
          type="button"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M16.5 16.5L21 21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <Link to="/contact" className="contact-link">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
