import Product from "./Product";
import "./styles/productlist-page.css";
import axios from "axios";
import { useState, useEffect } from "react";

function ProductList() {
  const [productData, setProductData] = useState([{ isLoaded: true }]);

  useEffect(() => {
    axios.get("/db/products.json").then((response) => {
      setProductData(response.data);
    });
  }, []);

  return (
    <>
      <div className="product-list-container">
        <div className="title-div-men">
          <h1>Men’s Shoes</h1>
          <div className="shoe-options-div">
            <div className="shoe-options active">View All</div>
            <div className="shoe-options">Trainers</div>
            <div className="shoe-options">Loafers</div>
            <div className="shoe-options">Scandals</div>
            <div className="shoe-options">Shoes</div>
            <div className="shoe-options">Crocs</div>
            <div className="shoe-options">Sliders & Flip Flops</div>
            <div className="shoe-options">Boots</div>
          </div>
          <div className="sort-title">
            <span className="sort-btn">
              SORT BY LATEST
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.28886 7.15694L0.631863 1.49994L2.04586 0.0859375L6.99586 5.03594L11.9459 0.0859375L13.3599 1.49994L7.70286 7.15694C7.51534 7.34441 7.26103 7.44972 6.99586 7.44972C6.7307 7.44972 6.47639 7.34441 6.28886 7.15694Z"
                  fill="#0A0A0B"
                />
              </svg>
            </span>
            <span className="show-sorted">SHOWING 1-9 OF 120 RESULTS</span>
          </div>
        </div>
        <div className="productListSection">
          <div className="listProduct">
            {productData.map((item, i) => {
              return (
                <Product
                  name={item.name}
                  price={item.price}
                  src={item.image}
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className="bottom-page-direction">
          <button className="prev">&lt; Previous</button>

          <span className="other-pages">
            <span className="page-one">1, </span>2, 3, ..., 14
          </span>
          <button className="next">Next &gt;</button>
        </div>
        <div className="loadMore-div">
          <button className="btn-loadMore">Load More</button>
        </div>
      </div>
    </>
  );
}

export default ProductList;
