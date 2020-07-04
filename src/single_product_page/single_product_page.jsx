import React from "react";
import "./single_product_page.css";
import SideImages from "../single_product_page/side_images";

import { Link } from "react-router-dom";

class SingleProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0, isFadeIn: false };
  }

  handlePrevImage = () => {
    const numberOfImages = this.props.productImages.length;

    const prevState =
      (this.state.currentImage + numberOfImages - 1) % numberOfImages;
    this.changeCurrentImageTo(prevState);
  };

  handleNextImage = () => {
    const numberOfImages = this.props.productImages.length;

    const nextState = (this.state.currentImage + 1) % numberOfImages;
    this.changeCurrentImageTo(nextState);
  };

  turnOffFadeIn = () => {
    this.setState({ isFadeIn: false });
  };

  changeCurrentImageTo = (index) => {
    clearTimeout(this.ourTimeout);
    this.setState({ currentImage: index, isFadeIn: true });
    this.ourTimeout = setTimeout(this.turnOffFadeIn, 2000);
  };

  componentWillUnmount() {
    clearTimeout(this.ourTimeout);
  }

  render() {
    const { name, info, id, price, addToCart } = this.props;

    const { currentImage } = this.state;
    const imgSrc = this.props.productImages[currentImage];
    const sideImageClass = this.state.isFadeIn
      ? "single_product_image single_product_image_fadein"
      : "single_product_image";

    return (
      <div>
        <div className="product_wrapper">
          <div>
            <SideImages
              currentImage={currentImage}
              onChange={this.changeCurrentImageTo}
              productImages={this.props.productImages}
            />
          </div>
          <div className="img_container">
            <button
              className="prev_btn"
              onClick={this.handlePrevImage}
            ></button>
            <img src={imgSrc} className={sideImageClass} alt="product" />

            <button
              className="next_btn"
              onClick={this.handleNextImage}
            ></button>
          </div>
          <div className="product_textbox">
            <div>
              <h1> {name}</h1>
              <h1> {price}</h1>
              <h1> {info}</h1>
            </div>

            <div className="single_product_page_button_container">
              <div>
                <button
                  onClick={() => {
                    addToCart(id);
                    openModel(id);
                  }}
                >
                  Add to cart
                </button>
              </div>
              <div>
                <Link to="/necklaces">
                  <button>Continue Shopping</button>{" "}
                </Link>
              </div>
              <div>
                <Link to="/cart">
                  <button>Pay Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProductPage;
