import React from 'react';
import Swal from 'sweetalert2';

const Navbar = () => {
  const navOptions = (
    <>
      <li><a href="#home">Home</a></li>
      <li><a href="#skills">Skill</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#about">About Me</a></li>
      <li><a href="#contact">Contact Me</a></li>
    </>
  );

  const handleDownloadClick = () => {
    Swal.fire({
      title: 'Are you sure you want to download the resume?',
      showCancelButton: true,
      confirmButtonText: 'Download',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        window.open('https://docs.google.com/document/d/1ku1V4bRooWEpH-yqSuQ9oYsjUYGhir5wcIUTaG-Qt5E/export?format=pdf', '_blank');
      }
    });
  };

  return (
    <div className="navbar bg-base-100 fixed top-0 backdrop-blur-lg z-10">
      <div className="navbar-start">
        <a className="text-xl">
          <img className="w-10 h-10 rou" src="https://i.ibb.co.com/d6GD56n/premium-photo-1685086785636-2a1a0e5b591f-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg" alt="" />
        </a>
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="btn btn-primary text-center p-4"
          onClick={handleDownloadClick}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
