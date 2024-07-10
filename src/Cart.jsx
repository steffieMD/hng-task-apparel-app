import { useNavigate } from "react-router-dom";
import "./styles/cart-page.css";
import Product from "./Product";
import itemImage from "./assets/png/image-1.png";

export default function Cart() {
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/shipping");
  };

  return (
    <div className="cart-container">
      <div className="cart-container-div">
        <h1>Shopping Bag</h1>
        <div className="cart-summary">
          <div className="cart">
            <div className="cart-items">
              <div className="item">
                <div className="item-image">
                  <img src={itemImage} alt="clogs" />
                </div>
                <div className="item-info-div">
                  <div className="item-info">
                    <span className="name">
                      Classic All-Terrain.
                      <svg
                        width="4"
                        height="16"
                        viewBox="0 0 4 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#172039" />
                        <circle cx="2" cy="8" r="2" fill="#172039" />
                        <circle cx="2" cy="14" r="2" fill="#172039" />
                      </svg>
                      Clog
                    </span>
                    <div></div>

                    <div className="span-context">
                      <span>Colour:</span>
                      <span>Black</span>
                    </div>
                    <div className="span-context">
                      <span>Size:</span>
                      <span>US 13</span>
                    </div>
                    <span className="edit">Edit</span>
                  </div>
                  <div className="price-quantity">
                    <span className="price">$39.99</span>
                    <div className="edit-cart">
                      <div className="change-quantity">
                        <span className="minus">-</span>
                        <span className="quantity">1</span>
                        <span className="plus">+</span>
                      </div>
                      <span className="delete">Delete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className="for-you">Recommended for You</span>
          </div>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-list">
              <div>
                <span>Subtotal</span>
                <span className="subtotal">$0</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>$10</span>
              </div>
              <div>
                <div className="promo">
                  <span>Discounts</span> <span>Add Promo Code</span>
                </div>
                <span>N/A</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span className="bill-total">$50</span>
              </div>
            </div>
            <button className="checkout-btn" onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <div className="listProduct">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="chatbot">?</div>
    </div>
  );
}
