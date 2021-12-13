import React from "react";
import { Link, useLocation } from "react-router-dom";
import PageTitle from "../PageTitle";
import "./style.scss";

const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <PageTitle />
      <ul className="navigation__wrapper flex align-items-center">
        <li className="navigation__link">
          <Link
            className={`link ${location.pathname === "/" && "active"}`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="navigation__link">
          <Link
            className={`link ${location.pathname === "/units" && "active"}`}
            to="/units"
          >
            Units
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
