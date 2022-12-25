import React from "react";
import { Link } from "react-router-dom";

import { NavbarStyled } from "../styles/components/Navbar.styled";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../static/navlinks";
const Navbar = () => {
  const [navOpen, setNavOpen] = React.useState<boolean>(false);

  const openNav = () => {
    setNavOpen(true);
  };
  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <NavbarStyled>
      <div className="navbar-brand">
        <Link to={"/"}>TOKI</Link>
      </div>
      <div className="menu-icon" onClick={openNav}>
        <FaBars />
      </div>
      <div className={`links-container ${navOpen && "nav-open"}`}>
        <ul className="links">
          <span className="close-icon" onClick={closeNav}>
            <FaTimes />
          </span>
          {navLinks.map((link) => {
            return (
              <li key={link.id} onClick={closeNav}>
                <Link to={link.url}>{link.text}</Link>
              </li>
            );
          })}
          <footer className="credits">
            &copy; Oloruntokiloba {new Date().getFullYear()}
          </footer>
        </ul>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;
