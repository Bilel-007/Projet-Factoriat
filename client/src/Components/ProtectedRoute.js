import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuth, userInfo } = useSelector((state) => state.user);

  return (
    <div>
      {isAuth && userInfo.role === "user" ? (
        <Outlet />
      ) : isAuth && userInfo.role === "admin" ? (
        <Navigate to="/Technoriat/AdminProfil" />
      ) : (
        <Navigate to="/Technoriat/Login" />
      )}
    </div>
  );
};

export default ProtectedRoute;
