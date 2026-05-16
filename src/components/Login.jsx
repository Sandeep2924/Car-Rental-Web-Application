import React, { useState, useEffect } from "react";
import "../dist/auth_style.css";

// Demo credentials
const DEMO_EMAIL = "demo@zoomcarz.in";
const DEMO_PASS  = "demo1234";

const Login = ({ isOpen, onClose, onLoginSuccess, onSwitchToSignup }) => {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) { setEmail(""); setPassword(""); setError(""); setShowPass(false); setLoading(false); }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email.trim() || !password) { setError("Please fill in all fields."); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email.trim() === DEMO_EMAIL && password === DEMO_PASS) {
        onLoginSuccess && onLoginSuccess(email.trim());
        onClose();
      } else {
        setError("Invalid email or password. Use the demo credentials above.");
      }
    }, 700);
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="login-title">

        <div className="auth-modal-header">
          <div className="auth-modal-header__icon auth-modal-header__icon--login">
            <i className="fa-solid fa-key"></i>
          </div>
          <h2 id="login-title">Welcome Back</h2>
          <p>Sign in to manage your bookings &amp; preferences</p>
          <button className="auth-modal-close" onClick={onClose} aria-label="Close">&times;</button>
        </div>

        <div className="auth-modal-body">
          <div className="auth-demo-badge">
            <i className="fa-solid fa-circle-info"></i>
            <div>
              <div className="demo-title">Demo Login Credentials</div>
              <div className="demo-creds">Email: demo@zoomcarz.in &nbsp;|&nbsp; Password: demo1234</div>
            </div>
          </div>

          {error && (
            <div className="auth-alert auth-alert--error">
              <i className="fa-solid fa-circle-exclamation"></i> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="auth-field">
              <label htmlFor="login-email">Email Address</label>
              <div className="auth-input-wrap">
                <i className="fa-regular fa-envelope field-icon"></i>
                <input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" required />
              </div>
            </div>

            <div className="auth-field">
              <label htmlFor="login-password">Password</label>
              <div className="auth-input-wrap">
                <i className="fa-solid fa-lock field-icon"></i>
                <input id="login-password" type={showPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" autoComplete="current-password" required />
                <button type="button" className="auth-toggle-pass" onClick={() => setShowPass(!showPass)}>
                  <i className={showPass ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"}></i>
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn auth-submit-btn--login" disabled={loading}>
              {loading ? <><i className="fa-solid fa-spinner fa-spin"></i> Signing In…</> : <>Sign In &nbsp;<i className="fa-solid fa-arrow-right"></i></>}
            </button>
          </form>

          <p className="auth-switch">
            Don't have an account?{" "}
            <button type="button" onClick={() => { onClose(); onSwitchToSignup && onSwitchToSignup(); }}>Sign Up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
