import React from "react";
import Sidebar from "../components/sidebar";
import SuperAdminDashboard from "./super_admin/Dashboard";
import StaffDashboard from "./library_staff/Dashboard";
import StudentDashboard from "./students/Dashboard";

export default function Dashboard({ user }) {
  // Render different dashboard content based on user role
  const renderDashboardContent = () => {
    switch (user.role) {
      case "superadmin":
        return <SuperAdminDashboard user={user} />;
      case "staff":
        return <StaffDashboard user={user} />;
      case "student":
        return <StudentDashboard user={user} />;
      default:
        return <div>Unknown user role</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar user={user} />
      <main className="flex-1 md:ml-50 p-4 sm:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">Welcome, {user.username}!</h1>
            <p className="text-slate-500">Your role: {user.role}</p>
          </div>

          {renderDashboardContent()}
        </div>
      </main>
    </div>
  );
}
