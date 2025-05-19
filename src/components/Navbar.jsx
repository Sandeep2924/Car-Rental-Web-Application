import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";
import "../dist/nav_style.css";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/models", label: "Vehicle Models" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/team", label: "Our Team" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav>
      {/* Mobile Navbar */}
      <div className={`mobile-navbar ${navOpen ? "open-nav" : ""}`}>
        <div
          onClick={toggleNav}
          className="mobile-navbar__close"
          aria-label="Close menu"
        >
          <i className="fas fa-times"></i>
        </div>
        <ul className="mobile-navbar__links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                onClick={closeNav}
                to={to}
                activeClassName="active"
                className="mobile-navbar__link"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Buttons for Mobile */}
        <div className="mobile-navbar__buttons">
          <Link to="/signin" className="navbar__btn navbar__btn--signin">
            Sign In
          </Link>
          <Link to="/register" className="navbar__btn navbar__btn--register">
            Register
          </Link>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img src={Logo} alt="ZoomCarz Logo" loading="lazy" />
          </Link>
          <span className="navbar__company-name">ZoomCarz</span>
        </div>
        <ul className="navbar__links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className="navbar__link"
                activeClassName="active"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="navbar__buttons">
          <Link to="/signin" className="navbar__btn navbar__btn--signin">
            Sign In
          </Link>
          <Link to="/register" className="navbar__btn navbar__btn--register">
            Register
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="mobile-hamb" onClick={toggleNav} aria-label="Open menu">
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
