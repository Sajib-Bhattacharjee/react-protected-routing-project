import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" className="nav-link">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink to="/add-blog" className="nav-link">
          {" "}
          Add Blog{" "}
        </NavLink>
        <NavLink to="/about" className="nav-link">
          {" "}
          About{" "}
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
