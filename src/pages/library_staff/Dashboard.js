import React from "react";

export default function StaffDashboard({ user }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 min-w-[260px] bg-white p-6 rounded-xl shadow border border-blue-100 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-blue-700">Books Checked Out</h3>
          <p className="text-3xl font-bold text-blue-600">156</p>
          <p className="text-sm text-gray-600">Due today: 23</p>
        </div>
        <div className="flex-1 min-w-[260px] bg-white p-6 rounded-xl shadow border border-blue-100 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-blue-700">Overdue Books</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
          <p className="text-sm text-gray-600">Total fines: $45.50</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">Today's Tasks</h3>
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-blue-50 rounded-lg">
            <span className="text-gray-800">Process returns (15 books)</span>
            <span className="text-sm text-blue-700 mt-1 sm:mt-0">Priority: High</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-blue-50 rounded-lg">
            <span className="text-gray-800">Update inventory</span>
            <span className="text-sm text-blue-700 mt-1 sm:mt-0">Priority: Medium</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-blue-50 rounded-lg">
            <span className="text-gray-800">Help students with research</span>
            <span className="text-sm text-blue-700 mt-1 sm:mt-0">Priority: Low</span>
          </div>
        </div>
      </div>
    </div>
  );
}


