import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedRouter({ user, children }) {
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return <Outlet></Outlet>;
}

export default ProtectedRouter;
