import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import UserChild1 from "./components/UserChild1";
import UserChild2 from "./components/UserChild2";
import EmployeeChild1 from "./components/EmployeeChild1";

export default function App() {
  return (
    <Router>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dasshboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Components */}
        <Route path="/user1" element={<UserChild1 />} />
        <Route path="/user2" element={<UserChild2 />} />
        <Route path="/employee" element={<EmployeeChild1 />} />

      </Routes>
    </Router>
  );
}
