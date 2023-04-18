import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {" "}
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Todo List
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/addtodo" className="navbar-link">
            Add New Todo
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/edittodo" className="navbar-link">
            Edit Todo
          </Link>
        </li>
        <li className="navbar-item">
          {/* Add the CSS class name */}
          <Link to="/login" className="navbar-link">
            Login
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/register" className="navbar-link">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
