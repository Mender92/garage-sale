import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Navbar() {
  console.log("NEW NAVBAR");

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="relative flex items-center justify-between h-24">
      {/* Logo */}
      <NavLink to="/" onClick={closeMenu}>
        <img
          src={logo}
          alt="Garage Sale Logo"
          className="w-14 h-14 object-contain"
        />
      </NavLink>

      {/* Desktop navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-10 text-[16px] font-normal">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/garage-sale">Garage Sale</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>

      {/* Desktop contact button */}
      <NavLink
        to="/contact"
        className="hidden md:block border border-[#1F1F1F] rounded-full px-7 py-3 hover:bg-[#1F1F1F] hover:text-white transition"
      >
        Contact Me
      </NavLink>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="md:hidden text-3xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F7E4AE] shadow-lg rounded-2xl p-6 md:hidden z-50">
          <nav>
            <ul className="flex flex-col gap-6 text-lg">
              <li>
                <NavLink to="/" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/garage-sale" onClick={closeMenu}>
                  Garage Sale
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" onClick={closeMenu}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className="inline-block border border-[#1F1F1F] rounded-full px-6 py-3 text-center"
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;