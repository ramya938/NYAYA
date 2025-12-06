import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("nyayaUser"));

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user?.name} 👋</h2>

      <div className="stats-grid">
        <div className="stat-box">
          <h3>Chatbot</h3>
          <p>Ask legal doubts instantly</p>
        </div>

        <div className="stat-box">
          <h3>Top Lawyers</h3>
          <p>Find expert lawyers</p>
        </div>

        <div className="stat-box">
          <h3>Supreme Court Cases</h3>
          <p>Explore important judgments</p>
        </div>

        <div className="stat-box">
          <h3>Profile</h3>
          <p>View or update your account</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
