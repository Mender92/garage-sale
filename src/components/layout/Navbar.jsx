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
          <ul className="flex gap-10 text-[16px] font-bold tracking-wide">

            <li>
              <NavLink
                to="/"
                className="transition-opacity duration-200 hover:opacity-60"
              >
                {t.home}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/garage-sale"
                className="transition-opacity duration-200 hover:opacity-60"
              >
                {t.garageSale}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="transition-opacity duration-200 hover:opacity-60"
              >
                {t.about}
              </NavLink>
            </li>

          </ul>
        </nav>

        {/* Language + Contact */}
        <div className="hidden md:flex items-center gap-6">

          {/* Language switcher */}
          <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide">

            <button
              type="button"
              onClick={() => setLanguage("sl")}
              className={`transition-opacity duration-200 ${
                language === "sl"
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              SLO
            </button>

            <span>|</span>

            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`transition-opacity duration-200 ${
                language === "en"
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              ENG
            </button>

          </div>

          {/* Contact */}
          <NavLink
            to="/contact"
            className="border border-[#1F1F1F] rounded-full px-7 py-3 text-[14px] font-bold tracking-wide transition-all duration-200 hover:bg-[#1F1F1F] hover:text-white"
          >
            {t.contact}
          </NavLink>

        </div>

        {/* Mobile menu button */}
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
              <ul className="flex flex-col gap-6 text-[16px] font-bold tracking-wide">

                <li>
                  <NavLink
                    to="/"
                    onClick={closeMenu}
                    className="transition-opacity duration-200 hover:opacity-60"
                  >
                    {t.home}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/garage-sale"
                    onClick={closeMenu}
                    className="transition-opacity duration-200 hover:opacity-60"
                  >
                    {t.garageSale}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/about"
                    onClick={closeMenu}
                    className="transition-opacity duration-200 hover:opacity-60"
                  >
                    {t.about}
                  </NavLink>
                </li>

                {/* Language */}
                <li>
                  <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide">

                    <button
                      type="button"
                      onClick={() => setLanguage("sl")}
                      className={`transition-opacity duration-200 ${
                        language === "sl"
                          ? "opacity-100"
                          : "opacity-40"
                      }`}
                    >
                      SLO
                    </button>

                    <span>|</span>

                    <button
                      type="button"
                      onClick={() => setLanguage("en")}
                      className={`transition-opacity duration-200 ${
                        language === "en"
                          ? "opacity-100"
                          : "opacity-40"
                      }`}
                    >
                      ENG
                    </button>

                  </div>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    onClick={closeMenu}
                    className="inline-block border border-[#1F1F1F] rounded-full px-6 py-3 text-center text-[14px] tracking-wide transition-all duration-200 hover:bg-[#1F1F1F] hover:text-white"
                  >
                    {t.contact}
                  </NavLink>
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