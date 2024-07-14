import React from "react";
import "./styles/cart-page.css";
import itemImage from "./assets/png/image-1.png";
import { Outlet, Link } from "react-router-dom";

function ProductCart(props) {
  const { name, current_price, photos, id, url_slug } = props.data;
  // const carts = JSON.parse(localStorage.getItem("cart"));

  const changeQuantity = function (id, type) {
    const carts = JSON.parse(localStorage.getItem("cart"));
    let positionInCart = carts.findIndex((val) => val.id == id);

    if (positionInCart >= 0) {
      switch (type) {
        case "plus":
          carts[positionInCart].quantity += 1;
          console.log(carts[positionInCart].quantity);
          break;

        default:
          let valueChange = carts[positionInCart].quantity - 1;
          if (valueChange > 0) {
            carts[positionInCart].quantity = valueChange;
          } else {
            carts.splice(positionInCart, 1);
          }
          break;
      }
    }
  };

  const handleChangeQty = function (e) {
    const clicked = e.target;
    if (
      clicked.classList.contains("minus") ||
      clicked.classList.contains("plus")
    ) {
      let type = "minus";
      if (clicked.classList.contains("plus")) {
        type = "plus";
      }
      changeQuantity(id, type);
    }
  };

  return (
    <div className="item pt-3">
      <Link to={url_slug}>
        <div className="item-image">
          <img
            src={`https://api.timbu.cloud/images/${photos.at(0).url}`}
            alt="clogs"
          />
        </div>
      </Link>
      <div className="item-info-div">
        <div className="item-info">
          <span className="name">{name}</span>
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
          <span className="price">${current_price.at(0).USD.at(0)}</span>
          <div className="edit-cart">
            <div className="change-quantity">
              <span className="minus" onClick={handleChangeQty}>
                -
              </span>
              <span className="quantity">{props.qty}</span>
              <span className="plus" onClick={handleChangeQty}>
                +
              </span>
            </div>
            <span className="delete">Delete</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCart;
