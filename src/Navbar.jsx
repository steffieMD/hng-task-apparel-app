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
      <nav class="navbar navbar-expand-lg bg-light justify-content-between">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <Link class="navbar-brand" to="/">
              <img src={logo} alt="shop logo" className="homePage" />
            </Link>

            <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  New In
                </a>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Men
                </Link>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Women
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link">Kids</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Brands</a>
              </li>
              <li class="nav-item">
                <a class="nav-link sale">Sale</a>
              </li>
            </ul>
            <form class="d-flex flex-row " role="search">
              <input
                class="form-control "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn " type="submit">
                <img src="src/assets/svg/search-icon.svg" alt="" />
              </button>
            </form>
          </div>
        </div>
        <ul
          class=" me-auto mb-2 mb-lg-0 nav-icons
">
          <li class="nav-item">
            <Link className="nav-link" to="/cartpage">
              <span className="cart-icon">
                <img src={cartIcon} alt="cart icon" />
              </span>
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <img src={likeIcon} alt="like icon" />
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link ">
              <img src={profileIcon} alt="profile icon" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
