import React, { useState } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  var [active, setActive] = useState("#");

  const clickhandler = (ev) => {
    setActive(ev.target.hash);
  };
  var Navbar = (
    <nav className="navbar navbar-light navbar-expand-md">
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarmenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarmenu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              activeClassName="active home"
              className="nav-link"
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active project"
              className="nav-link"
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active contact"
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item sm">
            <NavLink activeClassName="active" className="nav-link" to="/more">
              +
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
  return Navbar;
};

export default Navbar;
