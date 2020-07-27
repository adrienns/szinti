import React from "react";
import "./single_product_page.css";
import SideImages from "./Side_Images";
import { SwitchTransition, CSSTransition } from "react-transition-group";

import { Link } from "react-router-dom";

class SingleProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
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

  //turnOffFadeIn = () => {
  // this.setState({ isFadeIn: false });
  //};

  changeCurrentImageTo = (index) => {
    //  clearTimeout(this.ourTimeout);
    this.setState({ currentImage: index });
    // this.ourTimeout = setTimeout(this.turnOffFadeIn, 2000);
  };

  //componentWillUnmount() {
  // clearTimeout(this.ourTimeout);
  //}

  render() {
    const { name, info, id, price, material } = this.props;
    const { incrementCartProduct } = this.props;

    const { currentImage } = this.state;
    const imgSrc = this.props.productImages[currentImage];

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
            <SwitchTransition>
              <CSSTransition
                key={currentImage}
                timeout={{ enter: 500, exit: 100 }}
                classNames="fade"
              >
                <img src={imgSrc} className="sideImageClass" alt="product" />
              </CSSTransition>
            </SwitchTransition>

            <button
              className="next_btn"
              onClick={this.handleNextImage}
            ></button>
          </div>

          <div className="product_textbox">
            <div>
              <h1> {name}</h1>

              <h1> {info}</h1>
              <h1> {price}</h1>
            </div>

            <div>
              <form>
                <label htmlFor="materials">
                  <div className="item-info">Select Material:</div>
                  <select
                    value={material}
                    className="item-info"
                    id="select-material"
                  >
                    <option value="select">Please select material</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="bronze">Bronze</option>
                  </select>
                </label>
              </form>
            </div>

            <div className="single_product_page_button_container">
              <div>
                <button
                  className="modal-btn"
                  disabled={material === "select" ? true : false}
                  onClick={() => {
                    incrementCartProduct(id);
                  }}
                >
                  Add to Shopping Bag
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
