import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import useCart from "../Hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut();
  };
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li tabIndex={1}>
        <Link to="/ourfood">Our Food</Link>
      </li>
      {user ? (
        <button className="btn btn-success gap-2 relative me-5">
          <FaShoppingCart />
          <div className="badge badge-secondary absolute bottom-10 left-2">
            {cart.length}
          </div>
        </button>
      ) : (
        ""
      )}
      {user ? (
        <button onClick={handleLogOut} className="btn btn-error ms-3">
          Log Out
        </button>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
      {user ? <FaUserCircle className="ms-2 text-5xl" /> : ""}
    </>
  );
  return (
    <div className="navbar fixed bg-black opacity-70 z-10 text-white py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="text-xl uppercase flex flex-col">
          Bistro Boss
          <span className="uppercase text-base tracking-widest text-center mt-0">
            Resturant
          </span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
      </div>
    </div>
  );
};

export default Navbar;
