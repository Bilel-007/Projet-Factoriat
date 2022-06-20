import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const { isAuth, userInfo } = useSelector((state) => state.user);

  return (
    <div>
      {isAuth && userInfo.role === "admin" ? (
        <Outlet />
      ) : isAuth && userInfo.role === "user" ? (
        <Navigate to="/Technoriat/Profil" />
      ) : (
        <Navigate to="/Technoriat/Login" />
      )}
    </div>
  );
};

export default AdminProtectedRoute;
