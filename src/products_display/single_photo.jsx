import React from "react";
import "./single_photo.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "../product_context";

class SinglePhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHover: false };
  }

  handleMouseOn = () => {
    this.setState({ isHover: true });
  };

  handleMouseOff = () => {
    this.setState({ isHover: false });
  };

  render() {
    const id = this.props.id;
    const inCart = this.props.inCart;
    const imgUrl = this.props.imgLink;
    const imgName = this.props.imgName;
    const imgPrice = this.props.imgPrice;
    const imgSrc = this.state.isHover
      ? this.props.secondImg
      : this.props.mainImg;

    return (
      <li className="jewelery-item">
        <ProductConsumer>
          {(value) => (
            <div>
              <div
                className="image-container"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/organicproduct">
                  <img
                    onMouseEnter={this.handleMouseOn}
                    onMouseLeave={this.handleMouseOff}
                    className="necklaces-img"
                    src={imgSrc}
                    url={imgUrl}
                    alt="product"
                  />
                </Link>
              </div>
              <div
                onMouseEnter={this.handleMouseOn}
                onMouseLeave={this.handleMouseOff}
              >
                <div>
                  {this.state.isHover ? (
                    <button
                      className="cart_btn"
                      onClick={() => {
                        if (inCart == false) {
                          return value.addToCart(id), value.openModel(id);
                        } else {
                          return value.increment(id), value.openModel(id);
                        }
                      }}
                    >
                      <p className="button_text">ADD TO BAG</p>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                <p className="product-description">
                  <Link to="/organicproduct">{imgName}</Link>
                </p>
                <p className="product-description">{imgPrice}$</p>
              </div>
            </div>
          )}
        </ProductConsumer>
      </li>
    );
  }
}

SinglePhoto.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number,
    imgUrl: PropTypes.string,
    imgName: PropTypes.string,
    imgPrice: PropTypes.string,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default SinglePhoto;
