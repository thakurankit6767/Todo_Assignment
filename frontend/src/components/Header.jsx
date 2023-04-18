

import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar"> {/* Add the CSS class name */}
  <ul className="navbar-list"> {/* Add the CSS class name */}
    <li className="navbar-item"> {/* Add the CSS class name */}
      <Link to="/" className="navbar-link"> {/* Add the CSS class name */}
        Todo List
      </Link>
    </li>
    <li className="navbar-item"> {/* Add the CSS class name */}
      <Link to="/addtodo" className="navbar-link"> {/* Add the CSS class name */}
        Add New Todo
      </Link>
    </li>
    <li className="navbar-item"> {/* Add the CSS class name */}
      <Link to="/login" className="navbar-link"> {/* Add the CSS class name */}
        Login
      </Link>
    </li>
    <li className="navbar-item"> {/* Add the CSS class name */}
      <Link to="/register" className="navbar-link"> {/* Add the CSS class name */}
        Register
      </Link>
    </li>
  </ul>
</nav>

  );
};

export default Header;
