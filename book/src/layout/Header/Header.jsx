import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.svg";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.scss";
import SideBar from "./SideBar";
const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const handleOpen = () => {
    setSearchOpen(!searchOpen);
  };
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <header>
        <Container>
          <div className="header">
            <div className="left-side">
              <img src={logo} alt="" />
              <div className="input-side">
                <input
                  type="text"
                  placeholder="Search book by author or publisher..."
                />
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
            <div className="right-side-mobile">
              <div className="search-mobile">
                <button onClick={() => handleOpen()}>
                  <SearchIcon className="search-icon" />
                </button>
                <div
                  className={`search-mobile-input ${
                    searchOpen ? "active" : ""
                  }`}
                >
                  <input type="text" />
                  <CloseIcon onClick={() => setSearchOpen(false)} />
                </div>
              </div>
              <div className="hamburger-mobile">
                {openSideBar ? (
                  <CloseIcon />
                ) : (
                  <MenuIcon onClick={() => setOpenSideBar(true)} />
                )}
              </div>
            </div>
          </div>
        </Container>
      </header>
      <SideBar open={openSideBar} setOpenSideBar={setOpenSideBar} />
    </>
  );
};

export default Header;
