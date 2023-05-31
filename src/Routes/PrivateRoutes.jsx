import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex text-8xl font-bold items-center py-32 justify-center">
        L{" "}
        <div className="border-[12px] border-dashed animate-spin w-16 h-16 border-blue-600 rounded-full"></div>{" "}
        ading
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location}></Navigate>;
};

export default PrivateRoutes;
