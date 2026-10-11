
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? "mobile-menu-open" : ""}`}>
      {/* Logo */}
      <Link
        to="/#home"
        className="navbar-logo"
        onClick={closeMenu}
      >
        <span className="logo-text">Medic</span>
        <span className="logo-plus">+</span>
      </Link>

      {/* Hamburger menu button */}
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation links */}
      <ul className="nav-links" id="main-navigation">
        <li>
          <Link to="/#home" onClick={closeMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/#services" onClick={closeMenu}>
            Services
          </Link>
        </li>

        <li>
          <Link to="/#doctors" onClick={closeMenu}>
            Our Doctors
          </Link>
        </li>
      </ul>

      {/* Login and Contact */}
      <div className="nav-actions">
        <Link
          to="/login"
          className="login-button"
          onClick={closeMenu}
        >
          Login
        </Link>

        <Link
          to="/contact"
          className="contact-link"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
