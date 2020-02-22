import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/parent"
          className={window.location.pathname === "/parent" ? "nav-link active" : "nav-link"}
        >
          Parent
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/child"
          className={window.location.pathname === "/child" ? "nav-link active" : "nav-link"}
        >
          Child
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
