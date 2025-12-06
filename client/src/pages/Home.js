import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

import { FaGavel, FaFemale, FaBook, FaUserGraduate } from "react-icons/fa";

function Home() {
  const navigate = useNavigate();

  const categories = [
    { title: "Police & FIR Laws", icon: <FaGavel />, route: "/chatbot" },
    { title: "Consumer Rights", icon: <FaBook />, route: "/chatbot" },
    { title: "Women Safety Laws", icon: <FaFemale />, route: "/chatbot" },
    { title: "Student Rights", icon: <FaUserGraduate />, route: "/chatbot" }
  ];

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <h1 className="home-title">NYAYA Legal Assistant</h1>
        <p className="home-subtitle">Choose a category to begin</p>

        <div className="category-grid">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="category-card"
              onClick={() =>
                navigate(cat.route, { state: { category: cat.title } })
              }
            >
              <div className="category-icon">{cat.icon}</div>
              <div className="category-title">{cat.title}</div>
            </div>
          ))}
        </div>

        <button
          className="open-chatbot-btn"
          onClick={() => navigate("/chatbot")}
        >
          Open Chatbot
        </button>
      </div>
    </div>
  );
}

export default Home;
