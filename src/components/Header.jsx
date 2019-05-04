import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">
      Student App
    </Link>

    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink
            exact={true}
            to="/"
            className="nav-link"
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/students" className="nav-link" activeClassName="active">
            Student
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/subjects" className="nav-link" activeClassName="active">
            Subjects
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
