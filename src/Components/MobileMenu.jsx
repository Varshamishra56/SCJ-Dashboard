import React from "react";

const MobileMenu = () => {
  return (
    <div>
      <div className="hidden bg-secondary text-white py-4 px-4 md:hidden">
        <nav className="flex flex-col space-y-4">
          <a href="#" className="text-white hover:text-blue-300 transition">
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-blue-300 transition"
          >
            About
          </a>
          <a
            href="#services"
            className="text-white hover:text-blue-300 transition"
          >
            Services
          </a>
          <a
            href="#submit"
            className="text-white hover:text-blue-300 transition"
          >
            Submit Content
          </a>
          <a
            href="#catalog"
            className="text-white hover:text-blue-300 transition"
          >
            Catalog
          </a>
          <a
            href="#contact"
            className="text-white hover:text-blue-300 transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
