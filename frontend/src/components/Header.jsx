// import React from "react";

// import { Link } from "react-router-dom";
// import "../index.css";

// const Header = () => {
//   return (
//     <div >

//             <h3>MERN Stack CRUD Operations</h3>

//             <Link to="/">Home</Link>

//             <Link to="/todo">Add New Employee</Link>

//     </div>
//   );
// };

// export default Header;

import React from "react";
import "./css/Navbar.css"; // Import CSS file for styling
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
      <li className="navbar-item">
          <Link to="/"> Todo List</Link>
        </li>
        <li className="navbar-item">
          <Link to="/addtodo">Add New Todo</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="navbar-item">
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
