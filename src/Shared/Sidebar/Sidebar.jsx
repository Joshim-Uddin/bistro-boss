import React from "react";
import {
  FaBars,
  FaCalendar,
  FaCalendarCheck,
  FaComments,
  FaEnvelope,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white uppercase" : "text-black uppercase"
          }
        >
          <FaHome /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? "text-white uppercase" : "text-black uppercase"
          }
        >
          <FaBars /> Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourfood"
          className={({ isActive }) =>
            isActive ? "text-white uppercase" : "text-black uppercase"
          }
        >
          <FaShoppingCart /> Our Food
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-white uppercase" : "text-black uppercase"
          }
        >
          <FaEnvelope /> Contact
        </NavLink>
      </li>
    </div>
  );
};

export default Sidebar;
