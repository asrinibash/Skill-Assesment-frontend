import React, { useState } from "react";
import { images } from "../../Constants/index.js";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const links = [
    { name: "Home", link: "/" },
    {
      name: "About Us", link: "/about",
    },
    { name: "Partners", link: "/partner" },
    { name: "Training & Assessments", link: "/partner" },

    { name: "Resources", link: "/resource" },
    {
      name: "Notifications", link: "/notification",
      // submenu: [
      //   {
      //     name: "Training Partner Login",
      //     link: "/skillportal/traningpartner",
      //     external: false,
      //   },
      //   {
      //     name: "Assessment Partner Login",
      //     link: "/skillportal/assesmentagencies",
      //     external: false,
      //   },
      //   { name: "Certifications", link: "/certifications" },
      // ],
    },
    { name: "Contact Us", link: "/contact " },
  ];

  const [open, setOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleSubmenuClick = (submenuItem) => {
    setActiveSubmenu(submenuItem);
    setOpen(false); // Close the navbar
  };

  const handleContactClick = () => {
    setOpen(false); // Close the navbar
  };

  return (
    <>
      <header className="px-4 py-3 space-y-4 md:px-6 md:py-4 lg:px-8">
  <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
    {/* Logo */}
    <div className="flex items-center">
      <a href="#">
        <img
          src={images.logo}
          alt="logo"
          className="w-20 h-20 object-contain sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"
        />
      </a>
    </div>

    {/* Title and Subtitle */}
    <div className="text-center sm:text-left sm:flex-1 sm:mx-4">
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl lg:text-3xl">
        Assessment Management System (AMSAY)
      </h1>
      <h2 className="text-sm font-semibold text-gray-900 sm:text-base md:text-lg lg:text-xl">
        of Centurion University of Technology & Management (CUTM)
      </h2>
      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 sm:text-sm lg:text-base">
        Awarding Body recognized by NCVET
      </p>
    </div>

    {/* Logos and Contact */}
    <div className="flex flex-col items-center sm:items-end">
      <div className="flex items-center space-x-2 sm:space-x-4 mb-2">
        <a href="#">
          <img
            src={images.ncvetlogo}
            alt="NCVET Logo"
            className="w-16 h-16 object-contain sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
          />
        </a>
        <a href="#">
          <img
            src={images.skillindialogo}
            alt="Skill India Logo"
            className="w-14 h-14 object-contain sm:w-18 sm:h-18 md:w-22 md:h-22 lg:w-28 lg:h-28"
          />
        </a>
      </div>
      <span className="text-xs sm:text-sm md:text-base font-medium">
        Toll Free: +919345678998
      </span>
    </div>
  </div>
</header>
      <nav className="sticky top-0 shadow-md w-full border border-[#001d3d] z-50 bg-[#070F36]">
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
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
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
                            activeSubmenu === subItem.name ? "bg-gray-200" : ""
                          }`}
                          onClick={() => handleSubmenuClick(subItem.name)}
                        >
                          {subItem.external ? (
                            <a
                              href={subItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-black hover:text-[#0066ff] block"
                            >
                              {subItem.name}
                            </a>
                          ) : (
                            <Link
                              to={subItem.link}
                              className="text-black hover:text-[#0066ff] block"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="md:hidden mt-4">
                <Link to="/contact" onClick={handleContactClick}>
                  <button className="btn bg-[#0066ff] text-base text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-[#3f37c9] w-full">
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
            <Link
              to="/portal"
              className="hidden md:block"
              onClick={handleContactClick}
            >
              <button className="btn bg-[#0066ff] text-base text-white font-semibold px-3 py-1 rounded duration-500 hover:bg-[#3f37c9]">
                Portal login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;