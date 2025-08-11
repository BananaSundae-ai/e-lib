import React from "react";
import { FaUsers, FaBook, FaHandshake, FaExclamationTriangle, FaUserPlus, FaFileAlt, FaChartBar } from "react-icons/fa";

function StatCard({ icon: Icon, title, value, sub }) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow border border-blue-100 hover:shadow-md transition-shadow">
      <div className="p-3 rounded-lg bg-blue-50 text-blue-600">
        <Icon className="text-xl" />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <p className="text-3xl font-bold text-blue-600 leading-tight">{value}</p>
        <p className="text-sm text-gray-500">{sub}</p>
      </div>
    </div>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
      <h3 className="text-lg font-semibold text-blue-700 mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default function SuperAdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={FaUsers} title="Total Users" value="1,234" sub="+12% from last month" />
        <StatCard icon={FaBook} title="Total Books" value="5,678" sub="+8% from last month" />
        <StatCard icon={FaHandshake} title="Active Loans" value="892" sub="+5% from last month" />
        <StatCard icon={FaExclamationTriangle} title="Overdue" value="73" sub="Due today: 11" />
      </div>

      <SectionCard title="Quick Actions">
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
            <FaUserPlus /> Create User
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
            <FaBook /> Add Book
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">
            <FaFileAlt /> Generate Report
          </button>
        </div>
      </SectionCard>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <SectionCard title="Circulation Overview">
          <div className="space-y-4">
            <div className="h-40 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <FaChartBar className="mr-2" /> Chart placeholder
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Loans</span>
                <span className="text-blue-700">75%</span>
              </div>
              <div className="h-2 w-full bg-blue-100 rounded">
                <div className="h-2 bg-blue-600 rounded" style={{ width: "75%" }} />
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Recent Activity">
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-gray-800">New user registered: John Doe (Student)</span>
              <span className="text-sm text-blue-700 mt-1 sm:mt-0">2 minutes ago</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-gray-800">Book returned: "The Great Gatsby"</span>
              <span className="text-sm text-blue-700 mt-1 sm:mt-0">15 minutes ago</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-blue-50 rounded-lg">
              <span className="text-gray-800">New book added: "1984"</span>
              <span className="text-sm text-blue-700 mt-1 sm:mt-0">1 hour ago</span>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}