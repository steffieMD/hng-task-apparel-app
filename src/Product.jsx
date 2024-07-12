import likeIcon from "./assets/svg/like-icon.svg";
import blackClogs from "./assets/png/image-1.png";
import "./styles/productlist-page.css";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();

  const handleProceedToCart = () => {
    navigate("/cartpage");
  };

  const handleShowProduct = () => {
    navigate("/product");
  };

  return (
    <div className="item">
      <div className="item-title">
        <div className="item-name-rating">
          <h2>Classic All-Terrain Clog</h2>
          <div className="rating">
            <svg
              width="27"
              height="25"
              viewBox="0 0 27 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.1772 20.5462L19.4022 24.3113C20.5422 25.0013 21.9372 23.9813 21.6372 22.6912L19.9872 15.6112L25.4922 10.8413C26.4972 9.97125 25.9572 8.32125 24.6372 8.21625L17.3922 7.60125L14.5572 0.91125C14.0472 -0.30375 12.3072 -0.30375 11.7972 0.91125L8.96223 7.58625L1.71723 8.20125C0.397233 8.30625 -0.142767 9.95625 0.862233 10.8263L6.36723 15.5963L4.71723 22.6763C4.41723 23.9663 5.81223 24.9862 6.95223 24.2962L13.1772 20.5462Z"
                fill="#F06014"
              />
            </svg>
            <svg
              width="27"
              height="25"
              viewBox="0 0 27 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.1772 20.5462L19.4022 24.3113C20.5422 25.0013 21.9372 23.9813 21.6372 22.6912L19.9872 15.6112L25.4922 10.8413C26.4972 9.97125 25.9572 8.32125 24.6372 8.21625L17.3922 7.60125L14.5572 0.91125C14.0472 -0.30375 12.3072 -0.30375 11.7972 0.91125L8.96223 7.58625L1.71723 8.20125C0.397233 8.30625 -0.142767 9.95625 0.862233 10.8263L6.36723 15.5963L4.71723 22.6763C4.41723 23.9663 5.81223 24.9862 6.95223 24.2962L13.1772 20.5462Z"
                fill="#F06014"
              />
            </svg>
            <svg
              width="27"
              height="25"
              viewBox="0 0 27 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.1772 20.5462L19.4022 24.3113C20.5422 25.0013 21.9372 23.9813 21.6372 22.6912L19.9872 15.6112L25.4922 10.8413C26.4972 9.97125 25.9572 8.32125 24.6372 8.21625L17.3922 7.60125L14.5572 0.91125C14.0472 -0.30375 12.3072 -0.30375 11.7972 0.91125L8.96223 7.58625L1.71723 8.20125C0.397233 8.30625 -0.142767 9.95625 0.862233 10.8263L6.36723 15.5963L4.71723 22.6763C4.41723 23.9663 5.81223 24.9862 6.95223 24.2962L13.1772 20.5462Z"
                fill="#F06014"
              />
            </svg>
            <svg
              width="27"
              height="25"
              viewBox="0 0 27 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.1772 20.5462L19.4022 24.3113C20.5422 25.0013 21.9372 23.9813 21.6372 22.6912L19.9872 15.6112L25.4922 10.8413C26.4972 9.97125 25.9572 8.32125 24.6372 8.21625L17.3922 7.60125L14.5572 0.91125C14.0472 -0.30375 12.3072 -0.30375 11.7972 0.91125L8.96223 7.58625L1.71723 8.20125C0.397233 8.30625 -0.142767 9.95625 0.862233 10.8263L6.36723 15.5963L4.71723 22.6763C4.41723 23.9663 5.81223 24.9862 6.95223 24.2962L13.1772 20.5462Z"
                fill="#F06014"
              />
            </svg>
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.1692 1.90186C12.0674 0.388508 14.3004 0.388508 15.1986 1.90186L17.9465 6.53829C18.1994 6.96547 18.6385 7.25589 19.1375 7.33013L23.7018 8.00476C25.6899 8.29909 26.3872 10.758 24.8383 12.0134L21.5128 14.7093C21.2836 14.8953 21.1096 15.1381 21.009 15.4123C20.9083 15.6865 20.8847 15.9821 20.9406 16.2683L21.8721 21.0558C22.2367 22.9312 20.2247 24.3872 18.4988 23.499L13.9584 21.1587C13.7196 21.0357 13.4538 20.9715 13.1839 20.9715C12.914 20.9715 12.6482 21.0357 12.4094 21.1587L7.86903 23.499C6.1431 24.3885 4.13106 22.9312 4.49568 21.0558L5.42718 16.2683C5.48307 15.9821 5.45946 15.6865 5.35881 15.4123C5.25816 15.1381 5.08416 14.8953 4.85497 14.7093L1.52819 12.0134C-0.0194293 10.758 0.676533 8.29909 2.66728 8.00476L7.23162 7.33013C7.47795 7.29356 7.71274 7.20331 7.91865 7.06603C8.12456 6.92875 8.29633 6.74795 8.42128 6.53699L11.1692 1.90186ZM13.4713 2.88254C13.442 2.83336 13.4001 2.79254 13.3497 2.76418C13.2992 2.73581 13.2421 2.72088 13.1839 2.72088C13.1257 2.72088 13.0686 2.73581 13.0181 2.76418C12.9677 2.79254 12.9258 2.83336 12.8965 2.88254L10.1472 7.51897C9.87204 7.98268 9.49399 8.38 9.04095 8.6816C8.58791 8.9832 8.07146 9.18139 7.5297 9.26154L2.96536 9.93617C2.90181 9.94552 2.84238 9.97269 2.79427 10.0144C2.74616 10.0561 2.71141 10.1105 2.69424 10.1711C2.67707 10.2318 2.6782 10.2959 2.69751 10.3559C2.71681 10.4159 2.75345 10.4692 2.80301 10.5092L6.12846 13.2051C6.63261 13.6139 7.01547 14.1476 7.23713 14.7505C7.45878 15.3534 7.5111 16.0035 7.38865 16.6329L6.45715 21.4205C6.44544 21.4806 6.45132 21.5428 6.47411 21.5999C6.49691 21.657 6.53569 21.7066 6.58601 21.743C6.63632 21.7795 6.69612 21.8013 6.75854 21.806C6.82096 21.8107 6.88346 21.798 6.93887 21.7695L11.4793 19.4304C12.0049 19.1596 12.5899 19.0181 13.1839 19.0181C13.7779 19.0181 14.3629 19.1596 14.8885 19.4304L19.4289 21.7695C19.4843 21.798 19.5468 21.8107 19.6093 21.806C19.6717 21.8013 19.7315 21.7795 19.7818 21.743C19.8321 21.7066 19.8709 21.657 19.8937 21.5999C19.9165 21.5428 19.9224 21.4806 19.9106 21.4205L18.9791 16.6329C18.8567 16.0035 18.909 15.3534 19.1307 14.7505C19.3523 14.1476 19.7352 13.6139 20.2393 13.2051L23.5661 10.5092C23.6157 10.4691 23.6523 10.4157 23.6716 10.3556C23.6908 10.2956 23.6918 10.2313 23.6745 10.1706C23.6572 10.11 23.6223 10.0556 23.574 10.014C23.5257 9.97234 23.4661 9.94532 23.4024 9.93617L18.8381 9.26154C18.2962 9.18125 17.7797 8.98286 17.3266 8.68103C16.8736 8.37919 16.4956 7.98162 16.2206 7.51767L13.4713 2.88254Z"
                fill="#0A0A0B"
              />
            </svg>
          </div>
        </div>
        <div className="like-item">
          <img className="like-icon" src={likeIcon} alt="" />
        </div>
      </div>
      <div className="img-div" onClick={handleShowProduct}>
        <img src={blackClogs} alt="black clogs" />
      </div>
      <div className="price-size-cart">
        <div className="size-price">
          <div className="size-div">
            <span className="size">Size:</span>
            <div className="size-btn">
              <span>US 12</span>
              <span>
                <svg
                  width="13"
                  height="18"
                  viewBox="0 0 13 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.65703 17.071L2.74615e-05 11.414L1.41403 10L6.36403 14.95L11.314 10L12.728 11.414L7.07103 17.071C6.8835 17.2585 6.62919 17.3638 6.36403 17.3638C6.09886 17.3638 5.84455 17.2585 5.65703 17.071Z"
                    fill="#0A0A0B"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.071 0.29277L12.728 5.94977L11.314 7.36377L6.364 2.41377L1.414 7.36377L0 5.94977L5.657 0.29277C5.84453 0.105299 6.09884 -1.62504e-05 6.364 -1.62504e-05C6.62916 -1.62504e-05 6.88347 0.105299 7.071 0.29277Z"
                    fill="#0A0A0B"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="price">£200</div>
        </div>
        <button className="addCart" onClick={handleProceedToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default Product;
