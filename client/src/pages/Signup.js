import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    alert("Signup clicked! (Backend will be added later)");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create NYAYA Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="signup-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Create Password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="signup-btn" onClick={register}>
          Sign Up
        </button>

        <p className="login-link">Already have an account? Login</p>
      </div>
    </div>
  );
}

export default Signup;
