import React, { Component } from "react";
import { necklaceProductList } from "./products_display/necklaceproductlist";
import { productDetails } from "./single_product_page/NecklacesInfo";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    necklaces: [],
    productDetails: productDetails,
    cart: [],
    modelOpen: false,
    modelProduct: productDetails,
    currentModalImage: null,
  };

  componentDidMount() {
    this.setNecklaces();
  }

  setNecklaces = () => {
    let tempNecklaces = [];
    necklaceProductList.forEach((item) => {
      const singleItem = { ...item };
      tempNecklaces = [...tempNecklaces, singleItem];
    });

    this.setState(() => {
      return { necklaces: tempNecklaces };
    });
  };

  getItem = (id) => {
    const product = this.state.necklaces.find((item) => item.id === id);
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { productDetails: product };
    });
  };

  getFirstImg = (id) => {
    const item = this.getItem(id);
    return item.images[0];
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.necklaces];
    const index = tempProducts.indexOf(this.getItem(id));

    const product = tempProducts[index];
    const price = product.price;
    product.inCart = true;
    product.count = 1;
    product.total = price;

    const currentImage = this.getFirstImg(id);

    this.setState(() => {
      return {
        products: tempProducts,
        cart: [...this.state.cart, product],
        currentModalImage: currentImage,
      };
    });
  };

  openModel = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modelProduct: product, modelOpen: true };
    });
  };

  closeModel = () => {
    this.setState(() => {
      return { modelOpen: false };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModel: this.openModel,
          closeModel: this.closeModel,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
