import React from "react";

export default function Dashboard({ user }) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">
        Welcome, {user.username}!
      </h1>
      <p>Your role: {user.role}</p>
    </div>
  );
}
