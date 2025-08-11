import React from "react";

export default function StudentDashboard({ user }) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-6">
        <div className="flex-1 min-w-[260px] bg-white p-6 rounded-xl shadow border border-blue-100 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-blue-700">My Loans</h3>
          <p className="text-3xl font-bold text-blue-600">3</p>
          <p className="text-sm text-gray-600">Due soon: 1 book</p>
        </div>
        <div className="flex-1 min-w-[260px] bg-white p-6 rounded-xl shadow border border-blue-100 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-blue-700">Fines</h3>
          <p className="text-3xl font-bold text-blue-600">$0.00</p>
          <p className="text-sm text-gray-600">All payments up to date</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">My Current Loans</h3>
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-blue-50 rounded-lg">
            <div>
              <span className="font-medium text-gray-900">"The Great Gatsby"</span>
              <p className="text-sm text-gray-600">Due: March 15, 2024</p>
            </div>
            <span className="text-sm text-blue-700 mt-1 sm:mt-0">On time</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-blue-50 rounded-lg">
            <div>
              <span className="font-medium text-gray-900">"1984"</span>
              <p className="text-sm text-gray-600">Due: March 20, 2024</p>
            </div>
            <span className="text-sm text-blue-700 mt-1 sm:mt-0">On time</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-blue-50 rounded-lg">
            <div>
              <span className="font-medium text-gray-900">"To Kill a Mockingbird"</span>
              <p className="text-sm text-gray-600">Due: March 12, 2024</p>
            </div>
            <span className="text-sm text-blue-700 mt-1 sm:mt-0">Due soon</span>
          </div>
        </div>
      </div>
    </div>
  );
}


