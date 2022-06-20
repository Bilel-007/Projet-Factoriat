import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const NotUserProtectedRoute = () => {
  const { isAuth, userInfo } = useSelector((state) => state.user);

  return (
    <div>
      {!isAuth ? (
        <Outlet />
      ) : isAuth && userInfo.role === "user" ? (
        <Navigate to="/Technoriat/Profil" />
      ) : (
        <Navigate to="/Technoriat/AdminProfil" />
      )}
    </div>
  );
};

export default NotUserProtectedRoute;
