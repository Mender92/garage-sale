import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <header className="flex items-center justify-between h-24">
      <NavLink to="/">
        <img
          src={logo}
          alt="Garage Sale Logo"
          className="w-14 h-14 object-contain"
        />
      </NavLink>

      <nav>
        <ul className="flex gap-10 text-[16px] font-normal">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/garage-sale">Garage Sale</NavLink>
          </li>

          <li>
            <NavLink to="/about">About Project</NavLink>
          </li>
        </ul>
      </nav>

      <NavLink
        to="/contact"
        className="border border-[#1F1F1F] rounded-full px-7 py-3 hover:bg-[#1F1F1F] hover:text-white transition"
      >
        Contact Me
      </NavLink>
    </header>
  );
}

export default Navbar;