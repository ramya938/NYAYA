import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import TopLawyers from "./pages/TopLawyers";
import PastCases from "./pages/PastCases";
import Chatbot from "./pages/Chatbot";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Pages Wrapped in Layout */}
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/lawyers"
          element={
            <Layout>
              <TopLawyers />
            </Layout>
          }
        />
        <Route
          path="/cases"
          element={
            <Layout>
              <PastCases />
            </Layout>
          }
        />
        <Route
          path="/chatbot"
          element={
            <Layout>
              <Chatbot />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
