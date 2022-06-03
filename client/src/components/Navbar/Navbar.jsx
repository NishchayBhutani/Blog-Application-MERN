/** @format */

import "./Navbar.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const logoutHandler = (e) => {
    localStorage.clear();
  };
  return (
    <>
      <div className='navbar-container'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark space'>
          <a className='navbar-brand' href='http://localhost:3000/dashboard'>
            <b className='text'>BlogSpot</b>
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav space1'>
              <button className='btn btn-dark '>
                <NavLink to='/create' className='nav-item nav-link active'>
                  Create
                </NavLink>
              </button>

              <button className='btn btn-dark'>
                <NavLink
                  to='/dashboard/myprojects'
                  className='nav-item nav-link active'>
                  My Projects
                </NavLink>
              </button>

              <button className='btn btn-dark'>
                <NavLink to='/profile' className='nav-item nav-link active'>
                  Profile
                </NavLink>
              </button>

              <button className='btn btn-dark'>
                <NavLink
                  to='/'
                  onClick={logoutHandler}
                  className='nav-item nav-link active'>
                  Logout
                </NavLink>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
