// import "./styles/navbar-footer.css";
import logo from "./assets/svg/logo.svg";
import searchIcon from "./assets/svg/search-icon.svg";
import cartIcon from "./assets/svg/cart-dot.svg";
import likeIcon from "./assets/svg/like-icon.svg";
import profileIcon from "./assets/svg/profile-icon.svg";
import hamburgerMenuIcon from "./assets/svg/hamburger-icon.svg";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <Link to="/">
        <div className="logo">
          <img src={hamburgerMenuIcon} alt="" />
          <img src={logo} alt="shop logo" className="homePage" />
        </div>
      </Link>
      <div className="links">
        <div>
          <a>New In</a>
        </div>
        <div className="active">
          <Link to="/">Men</Link>
        </div>
        <div>
          <a>Women</a>
        </div>
        <div>
          <a>Kids</a>
        </div>
        <div>
          <a>Brands</a>
        </div>
        <div>
          <a className="sale">Sale</a>
        </div>
      </div>
      <div className="rest-nav">
        <div className="search-bar">
          <input
            type="text"
            name=""
            className="search-input"
            id=""
            placeholder="Search"
          />

          <button className="search-btn">
            <img src={searchIcon} alt="search icon" />
          </button>
        </div>
        <div className="other-links">
          <span className="search-icon">
            <img src={searchIcon} alt="cart icon" />
          </span>
          <Link to="/cartpage">
            <span className="cart-icon">
              <img src={cartIcon} alt="cart icon" />
            </span>
          </Link>
          <span>
            <img src={likeIcon} alt="like icon" />
          </span>
          <span>
            <img src={profileIcon} alt="profile icon" />
          </span>
        </div>
      </div>
    </header>
  );
}
