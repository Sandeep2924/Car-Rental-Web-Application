import React, { useState, useEffect } from "react";
import "../dist/auth_style.css";

const Signup = ({ isOpen, onClose, onSwitchToLogin }) => {
  const [name, setName]               = useState("");
  const [email, setEmail]             = useState("");
  const [password, setPassword]       = useState("");
  const [confirm, setConfirm]         = useState("");
  const [showPass, setShowPass]       = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError]             = useState("");
  const [success, setSuccess]         = useState(false);
  const [loading, setLoading]         = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) { setName(""); setEmail(""); setPassword(""); setConfirm(""); setError(""); setSuccess(false); setLoading(false); setShowPass(false); setShowConfirm(false); }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim() || !password || !confirm) { setError("All fields are required."); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters."); return; }
    if (password !== confirm) { setError("Passwords do not match."); return; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) { setError("Please enter a valid email address."); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => { onClose(); onSwitchToLogin && onSwitchToLogin(); }, 1800);
    }, 800);
  };

  if (!isOpen) return null;

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-card" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="signup-title">

        <div className="auth-modal-header">
          <div className="auth-modal-header__icon auth-modal-header__icon--signup">
            <i className="fa-solid fa-user-plus"></i>
          </div>
          <h2 id="signup-title">Create Account</h2>
          <p>Join ZoomCarz and start booking your dream rides</p>
          <button className="auth-modal-close" onClick={onClose} aria-label="Close">&times;</button>
        </div>

        <div className="auth-modal-body">
          {error && (
            <div className="auth-alert auth-alert--error">
              <i className="fa-solid fa-circle-exclamation"></i> {error}
            </div>
          )}
          {success && (
            <div className="auth-alert auth-alert--success">
              <i className="fa-solid fa-circle-check"></i> Account created! Redirecting to Sign In…
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="auth-field">
              <label htmlFor="signup-name">Full Name</label>
              <div className="auth-input-wrap">
                <i className="fa-solid fa-user field-icon"></i>
                <input id="signup-name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ravi Kumar" autoComplete="name" required />
              </div>
            </div>

            <div className="auth-field">
              <label htmlFor="signup-email">Email Address</label>
              <div className="auth-input-wrap">
                <i className="fa-regular fa-envelope field-icon"></i>
                <input id="signup-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" required />
              </div>
            </div>

            <div className="auth-field">
              <label htmlFor="signup-password">Password</label>
              <div className="auth-input-wrap">
                <i className="fa-solid fa-lock field-icon"></i>
                <input id="signup-password" type={showPass ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Minimum 6 characters" autoComplete="new-password" required />
                <button type="button" className="auth-toggle-pass" onClick={() => setShowPass(!showPass)}>
                  <i className={showPass ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"}></i>
                </button>
              </div>
            </div>

            <div className="auth-field">
              <label htmlFor="signup-confirm">Confirm Password</label>
              <div className="auth-input-wrap">
                <i className="fa-solid fa-shield-halved field-icon"></i>
                <input id="signup-confirm" type={showConfirm ? "text" : "password"} value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="Re-enter password" autoComplete="new-password" required />
                <button type="button" className="auth-toggle-pass" onClick={() => setShowConfirm(!showConfirm)}>
                  <i className={showConfirm ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"}></i>
                </button>
              </div>
            </div>

            <button type="submit" className="auth-submit-btn auth-submit-btn--signup" disabled={loading || success}>
              {loading ? <><i className="fa-solid fa-spinner fa-spin"></i> Creating Account…</> : <>Create Account &nbsp;<i className="fa-solid fa-arrow-right"></i></>}
            </button>
          </form>

          <p className="auth-switch">
            Already have an account?{" "}
            <button type="button" onClick={() => { onClose(); onSwitchToLogin && onSwitchToLogin(); }}>Sign In</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
