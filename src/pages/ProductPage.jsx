import Footer from "../Footer";
import Navbar from "../Navbar";
import Chatbot from "../Chatbot";
import "../styles/product-page.css";
import productLikeIcon from "../assets/svg/product-page-like-icon.svg";
import plusIcon from "../assets/svg/plus-icon.svg";
import crocsLogo from "../assets/svg/crocs-logo.svg";
import hoverImage from "../assets/png/terrain-clogs-product-img/hover-img.png";
import hoverSideImage1 from "../assets/png/terrain-clogs-product-img/small-hover-img-1.png";
import hoverSideImage2 from "../assets/png/terrain-clogs-product-img/small-hover-img-2.png";
import hoverSideImage3 from "../assets/png/terrain-clogs-product-img/small-hover-img-3.png";
import hoverSideImage4 from "../assets/png/terrain-clogs-product-img/small-hover-img-4.png";
import hoverSideImage5 from "../assets/png/terrain-clogs-product-img/small-hover-img-5.png";
import colorOptionImg1 from "../assets/png/terrain-clogs-product-img/color-option-img-1.png";
import colorOptionImg2 from "../assets/png/terrain-clogs-product-img/color-option-img-2.png";
import colorOptionImg3 from "../assets/png/terrain-clogs-product-img/color-option-img-3.png";
import colorOptionImg4 from "../assets/png/terrain-clogs-product-img/color-option-img-4.png";

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <div className="page-container ">
        <h1 className="page-direction">
          <span>Home</span>
          <span>/</span>
          <span>Men</span>
          <span>/</span>
          <span>Shoes</span>
          <span>/</span>
          <span className="active">Classic All-Terrain Clog in Black</span>
        </h1>
        <div className="image-content">
          <div className="hover-img-section">
            <div className="hover-img">
              <img src={hoverImage} alt="" />
            </div>

            <div className="img-options-div">
              <div className="img-options">
                <img src={hoverSideImage1} alt="" />
              </div>
              <div className="img-options">
                <img src={hoverSideImage2} alt="" />
              </div>
              <div className="img-options">
                <img src={hoverSideImage3} alt="" />
              </div>
              <div className="img-options">
                <img src={hoverSideImage4} alt="" />
              </div>
              <div className="img-options">
                <img src={hoverSideImage5} alt="" />
              </div>
            </div>
          </div>
          <div className="image-adds">
            <div className="itemInfo">
              <span className="brand">
                <img src={crocsLogo} alt="" />
              </span>
              <span className="name-product">Classic All-Terrain Clog</span>
              <span className="itemPrice">$39.99</span>
            </div>
            <div className="color-section-div">
              <span className="color-selection">Colour: Black</span>
              <div className="color-options">
                <div>
                  <img src={colorOptionImg1} alt="" />
                </div>
                <div>
                  <img src={colorOptionImg2} alt="" />
                </div>
                <div>
                  <img src={colorOptionImg3} alt="" />
                </div>
                <div>
                  <img src={colorOptionImg4} alt="" />
                </div>
              </div>
            </div>
            <div className="size-section">
              <span className="choose-size">Size:</span>
              <div className="size-option-qty">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select </option>
                  <option value="1">One</option>
                </select>

                <div className="itemQuantity">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
              </div>
            </div>

            <div className="page-btns">
              <button>ADD TO CART</button>
              <button>
                <img src={productLikeIcon} alt="" />
              </button>
            </div>
            <ul className="other-others">
              <li>
                <a href="">
                  <span>Product Description</span>
                  <span>
                    <img src={plusIcon} alt="" />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Brand</span>
                  <span>
                    <img src={plusIcon} alt="" />
                  </span>
                </a>
              </li>
              <li>
                <a href="">
                  <span>Free shipping on orders $50 and above</span>
                  <span>
                    <img src={plusIcon} alt="" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <span className="hover-text">Hover to magnify</span>
        <Chatbot />
      </div>

      <Footer />
    </>
  );
}
