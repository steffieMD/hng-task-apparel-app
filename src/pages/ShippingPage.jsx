import Footer from "../Footer";
import Navbar from "../Navbar";
import "../styles/shipping-page.css";

import { useNavigate } from "react-router-dom";

export default function ShippingPage() {
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/payment");
  };

  const backToConfirmatiom = () => {
    navigate("/confirmation");
  };

  const backToPayment = () => {
    navigate("/payment");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>
          <span className="active">Shipping</span>
          <span className="active">&rarr;</span>
          <span className="payment-header" onClick={backToPayment}>
            Payment
          </span>
          <span>&rarr;</span>
          <span className="confirmation-header" onClick={backToConfirmatiom}>
            Confirmation
          </span>
        </h1>
        <div className="shipping-container">
          <div className="shipping-form">
            <div className="sign-in-div">
              <div className="sign-in-text">
                <span>Already Have an Account?</span>
                <span>Sign in to speed up your chekout</span>
              </div>
              <button>Sign In</button>
            </div>
            <div className="shipping-address-form">
              <h2>Shipping Address</h2>
              <form>
                <label>
                  Email Address <span>*</span>
                  <input type="text" name="" className="form-input" id="" />
                </label>
                <div className="split-form">
                  <label>
                    First Name <span>*</span>
                    <input type="text" name="" className="form-input" id="" />
                  </label>
                  <label>
                    Last Name <span>*</span>
                    <input type="text" name="" className="form-input" id="" />
                  </label>
                </div>
                <label>
                  Country/Region <span>*</span>
                  <input type="text" name="" className="form-input" id="" />
                </label>
                <label>
                  Street Address <span>*</span>
                  <input type="text" name="" className="form-input" id="" />
                </label>
                <label>
                  Address 2
                  <input type="text" name="" className="form-input" id="" />
                </label>
                <div className="split-form">
                  <label>
                    State <span>*</span>
                    <input type="text" name="" className="form-input" id="" />
                  </label>
                  <label>
                    Post Code <span>*</span>
                    <input type="text" name="" className="form-input" id="" />
                  </label>
                </div>
              </form>
            </div>
            <div></div>
          </div>
          <div className="shipping-cart-summary">
            <div className="summary">
              <h3>Order Summary</h3>
              <div className="summary-list">
                <div>
                  <span>Subtotal</span>
                  <span className="subtotal">$39.99</span>
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
              <button
                className="checkout-btn"
                onClick={handleProceedToCheckout}>
                Continue to Payment
              </button>
            </div>
          </div>
        </div>
        <div className="shipping-method-div">
          <h2>Shipping Method</h2>
          <div className="shipping-page-div">
            <div className="radio-box">
              <div>
                <div className="svg-div">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                      cx="10"
                      cy="10.5"
                      r="9"
                      stroke="#0A0A0B"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="bold-text">Free</span>
                <span>Regular Shipment</span>
              </div>
              <span>5 - 12 business days</span>
            </div>
            <div className="radio-box">
              <div>
                <div className="svg-div">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                      cx="10"
                      cy="10.5"
                      r="9"
                      stroke="#0A0A0B"
                      strokeWidth="2"
                    />
                    <circle cx="10" cy="10.5" r="5" fill="#0A0A0B" />
                  </svg>
                </div>
                <span className="bold-text">$10</span>
                <span>Priority Shipment</span>
              </div>
              <span>3 - 4 business days</span>
            </div>
          </div>
        </div>
        <div className="chatbot">?</div>
      </div>
      <Footer />
    </>
  );
}
