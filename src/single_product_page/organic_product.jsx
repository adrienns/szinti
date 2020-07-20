import React, { useContext } from "react";
import { ProductContext } from "../product_context";
import SingleProductPage from "../single_product_page/single_product_page";
import { ProductConsumer } from "../product_context";

class OrganicProduct extends React.Component {
  constructor(props) {
    super(props);
  }
  myFunc = (value) => {
    const { productImages } = this.props;
    const { id, images, info, price, name, inCart } = value.productDetails;
    const { addToCart } = value;
    const { openModel } = value;
    const { incrementCartProduct } = value;

    return (
      <SingleProductPage
        productImages={productImages}
        incrementCartProduct={incrementCartProduct}
        addToCart={addToCart}
        openModel={openModel}
        images={images}
        price={price}
        inCart={inCart}
        info={info}
        name={name}
        id={id}
        key={id}
      />
    );
  };

  render() {
    return (
      <div className="organic_product_container">
        <ProductConsumer>{this.myFunc}</ProductConsumer>
      </div>
    );
  }
}

export default OrganicProduct;
