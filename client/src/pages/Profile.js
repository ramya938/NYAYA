import React, { useEffect, useState } from "react";
import "./Profile.css";

function Profile() {
  const [editMode, setEditMode] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "female",
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));

    if (stored) {
      setUser({
        name: stored.name || "",
        email: stored.email || "",
        phone: stored.phone || "",
        gender: stored.gender || "female",
      });
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEditMode(false);
    alert("Profile Updated Successfully!");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="profile-page">

      <div className="profile-header-noicon">
        <h2 className="profile-title">My Profile</h2>
      </div>

      <div className="profile-card">

        <h3 className="section-title">Personal Information</h3>

        {/* Each field in clean row */}
        <div className="profile-row">
          <span className="label">Name</span>
          {editMode ? (
            <input
              name="name"
              value={user.name}
              onChange={handleChange}
              className="profile-input"
            />
          ) : (
            <span className="value">{user.name}</span>
          )}
        </div>

        <div className="profile-row">
          <span className="label">Email</span>
          {editMode ? (
            <input
              name="email"
              value={user.email}
              onChange={handleChange}
              className="profile-input"
            />
          ) : (
            <span className="value">{user.email}</span>
          )}
        </div>

        <div className="profile-row">
          <span className="label">Phone</span>
          {editMode ? (
            <input
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="profile-input"
            />
          ) : (
            <span className="value">{user.phone}</span>
          )}
        </div>

        <div className="profile-row">
          <span className="label">Gender</span>
          {editMode ? (
            <select
              name="gender"
              value={user.gender}
              onChange={handleChange}
              className="profile-input"
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          ) : (
            <span className="value">{user.gender}</span>
          )}
        </div>

        {editMode ? (
          <div className="btn-group">
            <button className="save-btn" onClick={saveChanges}>Save</button>
            <button className="cancel-btn" onClick={() => setEditMode(false)}>Cancel</button>
          </div>
        ) : (
          <button className="edit-btn" onClick={() => setEditMode(true)}>
            Edit Profile
          </button>
        )}

        <button className="logout-btn" onClick={handleLogout}>Logout</button>

      </div>
    </div>
  );
}

export default Profile;
