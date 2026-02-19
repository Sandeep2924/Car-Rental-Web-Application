// Signup.js

import React, { useState, useEffect } from "react";

const Signup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log("Signup:", email);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{ zIndex: 2000 }} onClick={onClose}>
      <div
        className="modal-content"
        style={modalStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={closeBtnStyle}
          aria-label="Close signup modal"
        >
          &times;
        </button>
        <h2 style={titleStyle}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <button type="submit" style={submitBtnStyleRed}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const modalStyle = {
  background: "#fff",
  borderRadius: "8px",
  maxWidth: "400px",
  margin: "100px auto",
  padding: "2rem 2.5rem",
  boxShadow: "0 8px 32px rgba(38,70,83,0.25)",
  position: "relative",
  fontFamily: "Poppins, sans-serif",
};

const closeBtnStyle = {
  position: "absolute",
  top: 10,
  right: 10,
  background: "none",
  border: "none",
  fontSize: "1.8rem",
  color: "#e76f51",
  cursor: "pointer",
};

const titleStyle = {
  color: "#264653",
  marginBottom: "2rem",
  textAlign: "center",
};

const inputGroupStyle = { marginBottom: "1.5rem" };
const labelStyle = { color: "#264653", fontWeight: 600, fontSize: "1.2rem" };
const inputStyle = {
  width: "100%",
  padding: "0.8rem 1rem",
  border: "1px solid #e9c46a",
  borderRadius: "4px",
  fontSize: "1.1rem",
  marginTop: "0.5rem",
};

const submitBtnStyleRed = {
  width: "100%",
  background: "#e76f51",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  padding: "1rem 0",
  fontWeight: 700,
  fontSize: "1.2rem",
  cursor: "pointer",
  transition: "background 0.3s",
};

export default Signup;
