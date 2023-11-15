import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.svg";
import SearchIcon from "@mui/icons-material/Search";
import './Header.scss'
const Header = () => {
  return (
    <header>
      <Container>
        <div className="header">
        <div className="left-side">
        <img src={logo} alt="" />
          <div className="input-side">
            <input type="text" placeholder="Search book by author or publisher..." />
            <SearchIcon className="search-icon" />
          </div>
        </div>
          <div className="right-side">
            <Link to="/faq">FAQ</Link>
            <Link to="/faq">Track Order</Link>
          <div className="card">
          <img src={cart} alt="" />
          <span>0</span>
          </div>
            <Link className="sign-in">Sign in</Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
