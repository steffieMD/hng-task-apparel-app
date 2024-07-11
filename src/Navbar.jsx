// import "./styles/navbar-footer.css";
import logo from "./assets/svg/logo.svg";
import searchIcon from "./assets/svg/search-icon.svg";
import magnifyingGlassIcon from "./assets/svg/mag-glass-icon.svg";
import cartIcon from "./assets/svg/cart-dot.svg";
import likeIcon from "./assets/svg/like-icon.svg";
import profileIcon from "./assets/svg/profile-icon.svg";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
        <div className="container-fluid gap-4">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="shop logo" className="homePage" />
          </Link>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent">
            <ul className="navbar-nav gap-3 ms-auto me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link ps-2" href="#">
                  New In
                </a>
              </li>
              <li className="nav-item men-active">
                <Link className="nav-link ps-2" to="/">
                  Men
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link ps-2" href="#">
                  Women
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link ps-2">Kids</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ps-2">Brands</a>
              </li>
              <li className="nav-item">
                <a className="nav-link sale ps-2">Sale</a>
              </li>
            </ul>
            <form className="d-flex flex-row " role="search">
              <input
                className="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn " type="submit">
                <img src="src/assets/svg/search-icon.svg" alt="" />
              </button>
            </form>
          </div>
        </div>
        <ul
          className=" me-auto mb-2 mb-lg-0 nav-icons gap-3
">
          <li className="nav-item">
            <a className="nav-link magIcon" href="#">
              <img src={magnifyingGlassIcon} alt="like icon" />
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cartpage">
              <span className="cart-icon">
                <img src={cartIcon} alt="cart icon" />
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src={likeIcon} alt="like icon" />
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link ">
              <img src={profileIcon} alt="profile icon" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
