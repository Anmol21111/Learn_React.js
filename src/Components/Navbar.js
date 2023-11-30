import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/form">
                  Form
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cards">
                 Cards
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                ></ul>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                onClick={props.tooglemode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={{color:props.mode=== 'light'?'black':'white'}}
              >
               Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.defaultProps = {
  title: "This is anmol singh",
};
