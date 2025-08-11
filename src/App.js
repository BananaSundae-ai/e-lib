import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Logout from "./pages/logout";

export default function App() {
  const [user, setUser] = useState(null);

  // Helper function to check if user has access to a route
  const hasAccess = (userRole, requiredRole) => {
    if (requiredRole === "any") return true;
    if (requiredRole === "staff+") return userRole === "staff" || userRole === "superadmin";
    if (requiredRole === "superadmin") return userRole === "superadmin";
    return userRole === requiredRole;
  };

  // Protected Route component
  const ProtectedRoute = ({ children, requiredRole = "any" }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
    
    if (!hasAccess(user.role, requiredRole)) {
      return <Navigate to="/dashboard" replace />;
    }
    
    return children;
  };

  return (
    <Router>
      <Routes>
        {/* Public Route: Login */}
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Login onLogin={setUser} />
            )
          }
        />

        {/* Public Route: Logout */}
        <Route
          path="/logout"
          element={<Logout onLogout={() => setUser(null)} />}
        />

        {/* Main Dashboard - Role-based content */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        />

        {/* Role-specific routes can be added here later */}
        {/* Example:
        <Route
          path="/superadmin/*"
          element={
            <ProtectedRoute requiredRole="superadmin">
              <SuperadminRoutes />
            </ProtectedRoute>
          }
        />
        */}

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

        {/* Catch all - redirect to dashboard if logged in, otherwise to login */}
        <Route
          path="*"
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
