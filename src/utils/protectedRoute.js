import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ protectedRoute, children }) => {
  const userInfo = useSelector((state) => state.AuthReducer.user);
  const token = localStorage.getItem("token");
  const location = useLocation();

  // Define admin-only routes
  const adminRoutes = ["/manage-users", "/dashboard"];

  if (protectedRoute && !token) {
    // If the route is protected and there's no token, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (!protectedRoute && token) {
    // If the route is not protected and the user is logged in, redirect based on role
    if (userInfo?.role === "admin") {
      return <Navigate to="/dashboard" replace />;
    } else if (userInfo?.role === "user") {
      return <Navigate to="/user-dashboard" replace />;
    }
  }

  if (protectedRoute && userInfo?.role) {
    // If the user tries to access admin-only routes and is not an admin
    if (adminRoutes.includes(location.pathname) && userInfo.role !== "admin") {
      return <Navigate to="/user-dashboard" replace />;
    }
  }

  // Otherwise, render the children components
  return children;
};

export default ProtectedRoute;
