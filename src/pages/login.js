// src/pages/login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter username and password");
      return;
    }

    // For demo: accept any username/password and role
    const userData = { username, role };

    onLogin(userData); // save logged-in user in App state

    // Redirect to dashboard (role-based content will be handled there)
    navigate("/dashboard");
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-gray-50 light:bg-gray-800 px-4 sm:px-6 lg:px-8">
      <div className="relative py-3 sm:max-w-md lg:max-w-lg xl:max-w-xl sm:mx-auto">
        <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white light:bg-gray-900 rounded-xl shadow-lg">
          <div className="flex flex-col justify-center items-center h-full select-none">
                          <div className="flex flex-col items-center justify-center gap-2 mb-8">
                <div className="text-3xl font-bold text-blue-600" style={{ fontFamily: "'League Spartan', sans-serif" }}>
                  e-lib
                </div>
                <p className="m-0 text-[16px]  light:text-white">Login to your Account</p>
              <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
                Get started with our app, just start section and enjoy experience.
              </span>
            </div>
            
            <form onSubmit={handleSubmit} className="w-full">
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-400">Username</label>
                <input 
                  className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none light:border-gray-500 light:bg-gray-900 light:text-white" 
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError("");
                  }}
                />
              </div>
              
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold text-xs text-gray-400">Password</label>
                <input 
                  type="password" 
                  className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none light:border-gray-500 light:bg-gray-900 light:text-white" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                />
              </div>
              
              <div className="w-full flex flex-col gap-2 mb-4">
                <label className="font-semibold text-xs text-gray-400">Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="border rounded-lg px-3 py-2 text-sm w-full outline-none light:border-gray-500 light:bg-gray-900 light:text-white"
                >
                  <option value="superadmin">Super Admin</option>
                  <option value="staff">Library Staff</option>
                  <option value="student">Student</option>
                </select>
              </div>
              
              {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
              
              <div className="mt-5">
                <button 
                  type="submit"
                  className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
