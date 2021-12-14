import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../utils/vars";
import PageTitle from "../PageTitle";
import "./style.scss";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <PageTitle />
      <ul className="navigation__wrapper flex align-items-center">
        {NAV_LINKS.map((link) => (
          <li key={link.path} className="navigation__link">
            <Link
              className={`link ${location.pathname === link.path && "active"}`}
              to={`${link.path}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
