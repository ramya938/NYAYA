import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      name: "Ramya",
      token: "abc123"
    };

    localStorage.setItem("user", JSON.stringify(userData));

    navigate("/home");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">

        <h2 className="login-title">Welcome to NYAYA</h2>
        <p className="login-subtitle">Login to continue</p>

        <form onSubmit={handleLogin} className="login-form">

          <input
            type="email"
            placeholder="Enter email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="register-link"
           onClick={() => navigate("/register")}>
          Create Account
        </p>
      </div>
    </div>
  );
}

export default Login;
