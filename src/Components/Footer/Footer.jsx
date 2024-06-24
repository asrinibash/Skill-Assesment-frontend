import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaLocationArrow,
  FaMobileAlt,
  FaAngleRight,
} from "react-icons/fa";

function Footer() {
  const footerLinks = [
    { title: "Home", link: "/#" },
    { title: "About", link: "/#about" },
    { title: "Contact", link: "/#contact" },
    { title: "Blog", link: "/#blog" },
  ];

  const socialIcons = [
    { name: "Facebook", icon: <FaFacebook /> },
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "LinkedIn", icon: <FaLinkedin /> },
    { name: "Twitter", icon: <FaTwitter /> },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#001d3d] to-[#000814] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Centurion University of Technology and Management
          </h2>
          <p className="text-lg text-gray-300">
            Awarding Body recognized by NCVET
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#ffc300]">
              Skill Assessment Platform
            </h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <span>
                  <FaLocationArrow />
                </span>{" "}
                Bhubaneswar, Odisha
              </p>
              <p className="flex items-center gap-2">
                <span>
                  <FaMobileAlt />
                </span>{" "}
                +91 123456789
              </p>
            </div>
            <div className="flex gap-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-2xl hover:text-[#ffc300] transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2  md:col-span-2">
            {["Important Links", "Links", "Location"].map(
              (sectionTitle, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-4 text-[#ffc300]">
                    {sectionTitle}
                  </h3>
                  <ul className="space-y-2">
                    {footerLinks.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.link}
                          className="hover:text-[#ffc300] hover:translate-x-1 duration-300 flex items-center gap-2"
                        >
                          <FaAngleRight />
                          <span>{link.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#00142a] py-4 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Centurion University. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
