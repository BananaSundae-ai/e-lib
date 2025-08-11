import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout({ onLogout }) {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (typeof onLogout === "function") {
        onLogout();
      }
    } finally {
      navigate("/login", { replace: true });
    }
  }, [onLogout, navigate]);

  return null;
}


