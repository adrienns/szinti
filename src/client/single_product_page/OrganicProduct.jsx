import React from "react";
import SingleProductPage from "./SingleProductPage";
import { ProductConsumer } from "../contexts/ProductContext";

const OrganicProduct = () => {
  const myFunc = (value) => {
    const { id, images, info, price, name, inCart, material } = value.singleProduct;
    const { addToCart, openModal, incrementCartProduct } = value;

    return (
      images && (
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
          material={material}
        />
      )
    );
  };

  return (
    <div className="organic_product_container">
      <ProductConsumer>{myFunc}</ProductConsumer>
    </div>
  );
};

export default OrganicProduct;
