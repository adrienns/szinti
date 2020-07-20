import React, { Component } from "react";
import { necklaceProductList } from "./products_display/necklaceproductlist";
import { necklaceProductDetails } from "./single_product_page/NecklacesInfo";
import { ringsProductList } from "./rings/RingsProductList";
import { ringProductDetails } from "./rings/RingsInfo";

export const ProductContext = React.createContext();

const productsArray = [...necklaceProductList, ...ringsProductList];

const productDetails = [...necklaceProductDetails, ...ringProductDetails];

class ProductProvider extends Component {
  state = {
    products: [],
    productDetails: productDetails,
    cart: [],
    inCart: false,
    modelOpen: false,
    modelProduct: {},
    //currentModalImage: null,
    cartTotal: 0,
    itemsTotal: 0,
  };

  UNSAFE_componentWillMount() {
    localStorage.getItem("productDetails") &&
      this.setState({
        productDetails: JSON.parse(localStorage.getItem("productDetails")),
      });
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(
      "productDetails",
      JSON.stringify(nextState.productDetails)
    );
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    productsArray.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  getItemProductDetails = (id) => {
    const product = productDetails.find((item) => item.id === id);
    return product;
  };

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { productDetails: product };
    });
  };

  // getFirstImg = (id) => {
  //   const product = this.getItemProductDetails(id);
  //   return product.firstImage;
  // };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count += 1;

    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
        this.totalItems();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count -= 1;
    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return { cart: tempCart };
        },
        () => this.addTotals(),
        this.totalItems()
      );
    }
  };

  removeItem = (id) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return { cart: [...tempCart], products: [...tempProducts] };
      },
      () => {
        this.addTotals();
        this.totalItems();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
        this.addTotals();
        this.totalItems();
      }
    );
  };

  addTotals = () => {
    let cartTotal = 0;
    this.state.cart.map((item) => (cartTotal += item.total));
    this.setState(() => {
      return { cartTotal: cartTotal };
    });
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];

    const index = tempProducts.findIndex((elem) => elem.id === id);

    const product = { ...tempProducts[index] };

    const price = product.price;

    product.inCart = true;
    product.count = 1;
    product.total = price;

    tempProducts[index] = product;
    //const currentImage = this.getFirstImg(id);

    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
          //currentModalImage: currentImage,
        };
      },
      () => {
        this.addTotals();
        this.totalItems();
      }
    );
  };

  totalItems = () => {
    let itemsTotal = 0;
    this.state.cart.map((item) => (itemsTotal += item.count));
    this.setState(() => {
      return { itemsTotal: itemsTotal };
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

  incrementCartProduct = (id) => {
    const product = this.getItem(id);
    if (product.inCart == false) {
      return this.addToCart(id);
    } else {
      return this.increment(id);
    }
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
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          incrementCartProduct: this.incrementCartProduct,
          changeLanguage: this.changeLanguage,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
