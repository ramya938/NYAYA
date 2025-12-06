import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const userData = { name, email, password };
    localStorage.setItem("nyayaUser", JSON.stringify(userData));

    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>

      <form className="auth-box" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>

        <p onClick={() => navigate("/")} className="switch-text">
          Already have an account? Login
        </p>
      </form>
    </div>
  );
}

export default Register;
