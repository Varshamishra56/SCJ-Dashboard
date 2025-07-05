import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white border-b border-slate-700 shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between relative z-10">
          <a
            href="#"
            className="text-2xl font-['Pacifico'] bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 bg-clip-text text-transparent transition duration-300 hover:opacity-90"
          >
            SCJ Entertainments
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            {[
              "Home",
              "About",
              "Services",
              "Submit Content",
              "Catalog",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                className="text-slate-300 hover:text-blue-400 transition duration-300 hover:scale-105"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center text-slate-300 hover:text-purple-400 transition-all duration-300">
                <span>EN</span>
                <div className="w-6 h-6 flex items-center justify-center ml-1">
                  <i className="ri-arrow-down-s-line" />
                </div>
              </button>
              {/* Optional dropdown could go here */}
            </div>

            {/* Login Button */}
            <a
              href="#"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-400 text-slate-900 font-semibold px-5 py-2 rounded-full shadow-md hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25"
            >
              Login
            </a>

            {/* Mobile Menu Icon */}
            <button className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-blue-400 transition">
              <i className="ri-menu-line ri-lg" />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
