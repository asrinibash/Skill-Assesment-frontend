import React, { useState } from "react";
import { images } from "../../Constants";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const links = [
    { name: "Home", link: "/" },
    { name: "Stakeholders", link: "/stakeholder" },
    {
      name: "Training & Assessment",
      link: "/skillportal",
      submenu: [
        "Training Partner Login",
        "Assessment Partner Login",
        "Certifications",
      ],
    },
    { name: "Administrative", link: "/contact" },
    { name: "Resources", link: "/resource" },
    { name: "Notifications", link: "/news" },
  ];

  const [open, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleSubmenuClick = (submenuItem) => {
    setActiveSubmenu(submenuItem);
  };

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
      <nav className="sticky top-0 shadow-md w-full border border-[#001d3d] z-50 bg-gray-900">
        <div className="container mx-4 px-4">
          <div className="flex items-center justify-end py-4 relative gap-8">
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="text-white focus:outline-none"
              >
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
            <ul
              className={`md:flex md:items-center md:space-x-8 ${
                open
                  ? "block absolute top-full left-0 w-full bg-gray-900 p-4"
                  : "hidden"
              } md:static md:w-auto md:bg-transparent md:p-0`}
            >
              {links.map((link) => (
                <li
                  key={link.name}
                  className="menu-item text-base relative group py-2 md:py-0"
                >
                  <a
                    href={link.link}
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    {link.name}
                  </a>
                  {link.submenu && (
                    <ul className="submenu md:absolute md:bg-white md:shadow-lg md:rounded-base md:mt-2">
                      {link.submenu.map((subItem, index) => (
                        <li
                          key={index}
                          className={`md:px-4 md:py-2 ${
                            activeSubmenu === subItem ? "bg-gray-200" : ""
                          }`}
                          onClick={() => handleSubmenuClick(subItem)}
                        >
                          <a
                            href="#"
                            className="text-black hover:text-[#0066ff] block"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="md:hidden mt-4">
                <Link to="/contact">
                  <button className="btn bg-[#0066ff] text-base text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-[#3f37c9] w-full">
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
            <Link to="/contact" className="hidden md:block">
              <button className="btn bg-[#0066ff] text-base text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-[#3f37c9]">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
