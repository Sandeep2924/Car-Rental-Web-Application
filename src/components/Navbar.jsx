// Navbar.js

import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import "../dist/nav_style.css";
import Login from "./Login";
import Signup from "./Signup";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  useEffect(() => {
    document.body.style.overflow = showLogin || showSignup ? "hidden" : "auto";
  }, [showLogin, showSignup]);

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
                to={to}
                onClick={closeNav}
                className={({ isActive }) =>
                  `mobile-navbar__link ${isActive ? "active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mobile-navbar__buttons">
          <button
            className="navbar__btn navbar__btn--signin"
            onClick={() => {
              setShowLogin(true);
              closeNav();
            }}
          >
            Sign In
          </button>
          <button
            className="navbar__btn navbar__btn--register"
            onClick={() => {
              setShowSignup(true);
              closeNav();
            }}
          >
            Register
          </button>
        </div>
      </div>

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
                className={({ isActive }) =>
                  `navbar__link ${isActive ? "active" : ""}`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="navbar__buttons">
          <button
            className="navbar__btn navbar__btn--signin"
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>
          <button
            className="navbar__btn navbar__btn--register"
            onClick={() => setShowSignup(true)}
          >
            Register
          </button>
        </div>
        <div className="mobile-hamb" onClick={toggleNav} aria-label="Open menu">
          <i className="fas fa-bars"></i>
        </div>
      </div>

      <Login isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <Signup isOpen={showSignup} onClose={() => setShowSignup(false)} />
    </nav>
  );
};

export default Navbar;
