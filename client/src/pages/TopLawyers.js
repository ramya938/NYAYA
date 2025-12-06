import React from "react";
import "./TopLawyers.css";

const lawyers = [
  {
    name: "Harish Salve",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Harish_Salve.jpg",
    experience: "30+ years",
    field: "Constitutional & International Law",
  },
  {
    name: "Kapil Sibal",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Kapil_Sibal.jpg",
    experience: "40+ years",
    field: "Civil & Criminal Law",
  },
  {
    name: "Fali S. Nariman",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/14/Fali_Nariman.jpg",
    experience: "50+ years",
    field: "Constitutional & Human Rights Law",
  },
  {
    name: "Mukul Rohatgi",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Mukul_Rohatgi.jpg",
    experience: "35+ years",
    field: "Corporate & Constitutional Law",
  }
];

function TopLawyers() {
  return (
    <div className="lawyer-page">
      <h1 className="page-title">Top Lawyers of India</h1>
      <p className="page-subtitle">Expert lawyers available for consultation</p>

      <div className="lawyer-grid">
        {lawyers.map((lawyer, index) => (
          <div className="lawyer-card" key={index}>
            <img src={lawyer.image} alt={lawyer.name} className="lawyer-img" />
            <h2 className="lawyer-name">{lawyer.name}</h2>
            <p className="lawyer-field">{lawyer.field}</p>
            <p className="lawyer-exp">Experience: {lawyer.experience}</p>
            <button className="contact-btn">Contact Lawyer</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopLawyers;
