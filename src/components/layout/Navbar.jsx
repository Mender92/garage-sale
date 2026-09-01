import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import translations from "../../data/translations";

function Navbar({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const t = translations[language].nav;

  return (
    <header className="fixed top-0 left-0 w-full bg-[#FFEDBA] z-50">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex items-center justify-between h-24">
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
              <NavLink to="/">{t.home}</NavLink>
            </li>

            <li>
              <NavLink to="/garage-sale">{t.garageSale}</NavLink>
            </li>

            <li>
              <NavLink to="/about">{t.about}</NavLink>
            </li>
          </ul>
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language switcher */}
          <div className="flex items-center gap-2 text-[16px]">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={
                language === "en"
                  ? "font-bold"
                  : "text-gray-500 hover:text-[#1F1F1F] transition"
              }
            >
              EN
            </button>

            <span className="text-gray-400">|</span>

            <button
              type="button"
              onClick={() => setLanguage("sl")}
              className={
                language === "sl"
                  ? "font-bold"
                  : "text-gray-500 hover:text-[#1F1F1F] transition"
              }
            >
              SLO
            </button>
          </div>

          {/* Contact button */}
          <NavLink
            to="/contact"
            className="border border-[#1F1F1F] rounded-full px-7 py-3 hover:bg-[#1F1F1F] hover:text-white transition"
          >
            {t.contact}
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#FFEDBA] shadow-lg rounded-2xl p-6 md:hidden z-50">
            <nav>
              <ul className="flex flex-col gap-6 text-lg">
                <li>
                  <NavLink to="/" onClick={closeMenu}>
                    {t.home}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/garage-sale" onClick={closeMenu}>
                    {t.garageSale}
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/about" onClick={closeMenu}>
                    {t.about}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    onClick={closeMenu}
                    className="inline-block border border-[#1F1F1F] rounded-full px-6 py-3 text-center"
                  >
                    {t.contact}
                  </NavLink>
                </li>

                {/* Mobile language switcher */}
                <li className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={
                      language === "en"
                        ? "font-bold"
                        : "text-gray-500"
                    }
                  >
                    EN
                  </button>

                  <span className="text-gray-400">|</span>

                  <button
                    type="button"
                    onClick={() => setLanguage("sl")}
                    className={
                      language === "sl"
                        ? "font-bold"
                        : "text-gray-500"
                    }
                  >
                    SLO
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;