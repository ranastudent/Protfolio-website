import React from 'react';

const Navbar = () => {
  const navOptions = (
    <>
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 fixed top-0  backdrop-blur-lg z-10 ">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navOptions}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img className='w-10 h-10 rou' src="https://i.ibb.co.com/d6GD56n/premium-photo-1685086785636-2a1a0e5b591f-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg" alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn btn-primary text-center p-4"
          href="https://docs.google.com/document/d/1ku1V4bRooWEpH-yqSuQ9oYsjUYGhir5wcIUTaG-Qt5E/export?format=pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
