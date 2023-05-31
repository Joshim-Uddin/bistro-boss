import React from "react";
import {
  FaCalendar,
  FaCalendarCheck,
  FaComments,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content items-center w-full justify-center">
          {/* Page content here */}

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content bg-[#D1A054]">
            {/* Sidebar content here */}
            <div className="mt-2 mb-4">
              <h2 className="text-3xl font-semibold uppercase">Bistro Boss</h2>
              <span className="text-xl tracking-[0.5rem]">Restaurant</span>
            </div>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "text-white uppercase" : "text-black uppercase"
                }
              >
                <FaHome /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/reservation"
                className={({ isActive }) =>
                  isActive ? "text-white uppercase" : "text-black uppercase"
                }
              >
                <FaCalendar /> Reservation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/payment"
                className={({ isActive }) =>
                  isActive ? "text-white uppercase" : "text-black uppercase"
                }
              >
                <FaWallet /> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/mycart"
                className={({ isActive }) =>
                  isActive ? "text-white uppercase" : "text-black uppercase"
                }
              >
                <FaShoppingCart /> my cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/review"
                className={({ isActive }) =>
                  isActive ? "text-white uppercase" : "text-black uppercase"
                }
              >
                <FaComments /> Add Review
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/bookings"
                className={({ isActive }) =>
                  isActive ? "text-white uppercase" : "text-black uppercase"
                }
              >
                <FaCalendarCheck /> My Bookings
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
