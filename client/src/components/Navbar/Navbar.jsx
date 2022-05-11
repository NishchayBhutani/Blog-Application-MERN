/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const logoutHandler = (e) => {
    localStorage.removeItem("userId");
  };
  return (
    <div className='navbar-container'>
      <NavLink to='/create' className='navbar-navlink'>
        Create
      </NavLink>
      <NavLink to='/' onClick={logoutHandler} className='navbar-navlink'>
        Logout
      </NavLink>
    </div>
  );
};
