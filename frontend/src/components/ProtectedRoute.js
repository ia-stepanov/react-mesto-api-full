import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
  return props.isLogged ? <Component {...props} /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;