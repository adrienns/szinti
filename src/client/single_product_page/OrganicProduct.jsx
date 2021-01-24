import React from "react";
import SingleProductPage from "./SingleProductPage";
import { ProductConsumer } from "../contexts/ProductContext";

const OrganicProduct = () => {
  const myFunc = (value) => {
    const {
      id,
      images,
      price,
      inCart,
      material,
      name,
      name_hun,
      description_hun,
      description,
      material_cleaning_hun,
      material_cleaning,
      material_description_hun,
      material_description,
    } = value.singleProduct;
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
          name={name}
          name_hun={name_hun}
          description_hun={description_hun}
          description={description}
          material_cleaning_hun={material_cleaning_hun}
          material_cleaning={material_cleaning}
          material_description_hun={material_description_hun}
          material_description={material_description}
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
