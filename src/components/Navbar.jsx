import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import "../dist/nav_style.css";
import Login from "./Login";
import Signup from "./Signup";

const Navbar = ({ user, onLoginSuccess, onLogout }) => {
  const [navOpen, setNavOpen]     = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav  = () => setNavOpen(false);

  // Lock body scroll when any modal is open
  useEffect(() => {
    document.body.style.overflow = (showLogin || showSignup || navOpen) ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [showLogin, showSignup, navOpen]);

  const navLinks = [
    { to: "/",             label: "Home"           },
    { to: "/about",        label: "About"          },
    { to: "/models",       label: "Vehicle Models" },
    { to: "/testimonials", label: "Testimonials"   },
    { to: "/team",         label: "Our Team"       },
    { to: "/contact",      label: "Contact"        },
  ];

  // Short display name from email
  const displayName = user ? user.split("@")[0] : "";

  return (
    <>
      {/* ── Mobile Sidebar ── */}
      <div className={`mobile-navbar ${navOpen ? "open-nav" : ""}`}>
        <div onClick={toggleNav} className="mobile-navbar__close" aria-label="Close menu">
          <i className="fas fa-times"></i>
        </div>
        <ul className="mobile-navbar__links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={closeNav}
                className={({ isActive }) => `mobile-navbar__link ${isActive ? "active" : ""}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mobile-navbar__buttons">
          {user ? (
            <>
              <span className="navbar__user-chip">
                <i className="fa-solid fa-circle-check"></i> {displayName}
              </span>
              <button className="navbar__btn navbar__btn--logout" onClick={() => { onLogout(); closeNav(); }}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
              </button>
            </>
          ) : (
            <>
              <button className="navbar__btn navbar__btn--signin" onClick={() => { setShowLogin(true); closeNav(); }}>Sign In</button>
              <button className="navbar__btn navbar__btn--register" onClick={() => { setShowSignup(true); closeNav(); }}>Register</button>
            </>
          )}
        </div>
      </div>

      {/* ── Desktop Navbar ── */}
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
                className={({ isActive }) => `navbar__link ${isActive ? "active" : ""}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar__buttons">
          {user ? (
            <>
              <span className="navbar__user-chip">
                <i className="fa-solid fa-circle-check"></i> {displayName}
              </span>
              <button className="navbar__btn navbar__btn--logout" onClick={onLogout}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
              </button>
            </>
          ) : (
            <>
              <button className="navbar__btn navbar__btn--signin" onClick={() => setShowLogin(true)}>Sign In</button>
              <button className="navbar__btn navbar__btn--register" onClick={() => setShowSignup(true)}>Register</button>
            </>
          )}
        </div>

        <div className="mobile-hamb" onClick={toggleNav} aria-label="Open menu">
          <i className="fas fa-bars"></i>
        </div>
      </div>

      {/* ── Auth Modals ── */}
      <Login
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLoginSuccess={(email) => { onLoginSuccess && onLoginSuccess(email); }}
        onSwitchToSignup={() => setShowSignup(true)}
      />
      <Signup
        isOpen={showSignup}
        onClose={() => setShowSignup(false)}
        onSwitchToLogin={() => setShowLogin(true)}
      />
    </>
  );
};

export default Navbar;
