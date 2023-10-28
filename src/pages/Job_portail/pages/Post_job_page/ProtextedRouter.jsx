// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ProtectedRouter({ user, children }) {
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    Navigate("/login");
    return null;
  }

  return (
    <>
      {children}
      <Outlet />
    </>
  );
}

export default ProtectedRouter;
