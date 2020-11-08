import React from "react";
import SingleProductPage from "./SingleProductPage";
import { ProductConsumer } from "../contexts/ProductContext";

const OrganicProduct = () => {
  const myFunc = (value) => {
    const { id, images, info, price, name, inCart } = value.productDetails;
    const { addToCart } = value;
    const { openModal } = value;
    const { incrementCartProduct } = value;

    return (
      <SingleProductPage
        productImages={images}
        incrementCartProduct={incrementCartProduct}
        addToCart={addToCart}
        openModal={openModal}
        price={price}
        inCart={inCart}
        info={info}
        name={name}
        id={id}
        key={id}
      />
    );
  };

  return (
    <div className="organic_product_container">
      <ProductConsumer>{myFunc}</ProductConsumer>
    </div>
  );
};

export default OrganicProduct;
