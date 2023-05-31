import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  const location = useLocation();
  const login = location.pathname.includes("/login");
  const signup = location.pathname.includes("/signup");
  return (
    <>
      {login || signup ? <></> : <Navbar />}
      <Outlet />
      {login || signup ? <></> : <Footer />}
    </>
  );
};

export default Main;
