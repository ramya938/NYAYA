import React, { useState } from "react";
import "./PastCases.css";
import { famousCases } from "./casesData";

function PastCases() {
  const [search, setSearch] = useState("");
  const [selectedCase, setSelectedCase] = useState(null);

  const filteredCases = famousCases.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="cases-container">
      <h2 className="cases-title">Past Famous Cases</h2>

      <input
        type="text"
        className="search-box"
        placeholder="Search cases (e.g., Nirbhaya, Shah Bano, Privacy)..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cases-list">
        {filteredCases.map((caseItem, index) => (
          <div
            key={index}
            className="case-card"
            onClick={() => setSelectedCase(caseItem)}
          >
            <h3>{caseItem.title}</h3>
            <p>{caseItem.year}</p>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedCase && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedCase.title}</h2>
            <p className="year-text">Year: {selectedCase.year}</p>
            <p className="description">{selectedCase.description}</p>

            <h3 className="related-title">Related Cases</h3>
            <ul className="related-list">
              {selectedCase.related.map((r, index) => (
                <li key={index}>{r}</li>
              ))}
            </ul>

            <button className="close-btn" onClick={() => setSelectedCase(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PastCases;
