import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Public Route: Login */}
        <Route
          path="/login"
          element={<Login onLogin={setUser} />}
        />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            user ? (
              <Dashboard user={user} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Redirect root to login or dashboard */}
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}
