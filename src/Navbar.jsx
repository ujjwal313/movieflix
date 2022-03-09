import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar Logo"
        className="nav__avatar"
      />
    </div>
  );
};

export default Navbar;
