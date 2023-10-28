import React from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRouter({ user, children }) {
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  return <h1>Hello {children}</h1>;
}

export default ProtectedRouter;
