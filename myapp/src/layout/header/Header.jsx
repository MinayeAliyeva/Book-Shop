import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/books">Books</Link>
    </header>
  );
};

export default Header;
