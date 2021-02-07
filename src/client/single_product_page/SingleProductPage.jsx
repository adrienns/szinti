import React, { useState, useEffect, useContext } from "react";
import "./SingleProduct.css";
import SideImages from "./SideImages";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import ResponsiveSingleProductPage from "./ResponsiveSingleProductPage";
import ProductDescription from "./ProductDescription";
import { ProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [size, setSize] = useState(window.innerWidth);
  const { productname } = useParams();
  const { getCurrentProduct, setSelected } = useContext(ProductContext);

  const currentProduct = getCurrentProduct();
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
  } = currentProduct;

  useEffect(() => {
    setSelected(parseInt(productname));
  });

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  const changeCurrentImageTo = (index) => {
    setCurrentImage(index);
  };

  const imgSrc = images && images[currentImage];

  return (
    id == productname && (
      <React.Fragment>
        {size < 1100 ? (
          <div>
            <ResponsiveSingleProductPage
              productImages={images}
              id={id}
              inCart={inCart}
              currentImage={currentImage}
              price={price}
              material={material}
              name={name}
              name_hun={name_hun}
              description_hun={description_hun}
              description={description}
              material_cleaning_hun={material_cleaning_hun}
              material_cleaning={material_cleaning}
              material_description_hun={material_description_hun}
              material_description={material_description}
              changeCurrentImageTo={changeCurrentImageTo}
            />
          </div>
        ) : (
          <div className="product_wrapper">
            <div>
              <SideImages
                currentImage={currentImage}
                onChange={changeCurrentImageTo}
                productImages={images}
              />
            </div>

            <div className="img_container">
              <SwitchTransition>
                <CSSTransition
                  key={currentImage}
                  timeout={{ enter: 500, exit: 100 }}
                  classNames="fade"
                >
                  <img src={imgSrc} className="sideImageClass" alt="product" />
                </CSSTransition>
              </SwitchTransition>
            </div>
            <ProductDescription
              id={id}
              price={price}
              inCart={inCart}
              material={material}
              name={name}
              name_hun={name_hun}
              description_hun={description_hun}
              description={description}
              material_cleaning_hun={material_cleaning_hun}
              material_cleaning={material_cleaning}
              material_description_hun={material_description_hun}
              material_description={material_description}
            />
          </div>
        )}
      </React.Fragment>
    )
  );
};

export default SingleProductPage;
