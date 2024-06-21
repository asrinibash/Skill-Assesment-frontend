import React, { useState } from "react";
import { images } from "../../constants";

function Navbar() {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Stakeholders", link: "/stakeholder" },
    { name: "News", link: "/news" },
    { name: "Resources", link: "/resource" },
    { name: "Training & Assessment", link: "/skillportal" },
    { name: "Contact us", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 border-white border-t-4">
        <a className="flex items-center" href="#">
          <img
            src={images.logo}
            alt="logo"
            className="w-[154px] h-[154px] object-contain md:w-32"
          />
        </a>
        <div className="space-y-2 lg:ml-1 ml-3">
          <h1 className="text-sm font-semibold md:text-xl lg:text-3xl">
            Centurion University of Technology and Management
          </h1>
          <p className="text-xs lg:text-xl font-medium text-gray-500 dark:text-gray-400">
            Awarding Body recognized by NCVET
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#">
            <img
              src={images.ncvetlogo}
              alt="NCVET Logo"
              className="w-[104px] h-[104px] object-contain md:w-32"
            />
          </a>
          <a href="#">
            <img
              src={images.skillindialogo}
              alt="Skill India Logo"
              className="w-[104px] h-[104px] object-contain md:w-32"
            />
          </a>
        </div>
      </header>
      <nav className="shadow-md w-full border border-[#001d3d] top-0 left-0">
        <div className="flex items-center justify-between bg-[#001d3d] py-4 md:px-10 px-7">
          <div className="flex-grow md:flex-grow-0">
            <div
              onClick={() => setOpen(!open)}
              className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
          </div>
          <ul
            className={`flex-grow flex flex-col md:flex-row md:items-center md:justify-end md:space-x-10 md:space-y-0 space-y-7 md:static absolute w-full left-0 bg-[#001d3d] md:bg-transparent transition-all duration-500 ease-in ${
              open ? "top-16" : "top-[-490px]"
            }`}
          >
            {links.map((link) => (
              <li key={link.name} className="text-lg">
                <a
                  href={link.link}
                  className="text-white hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button className="btn bg-[#0066ff] text-lg text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-[#3f37c9]">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
