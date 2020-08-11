import React, { Component, createContext } from "react";
import { necklaceProductList } from "./products_display/necklaceproductlist";
import { necklaceProductDetails } from "./single_product_page/NecklacesInfo";
import { ringsProductList } from "./rings/RingsProductList";
import { ringProductDetails } from "./rings/RingsInfo";

export const ProductContext = createContext();

const productsArray = [...necklaceProductList, ...ringsProductList];

const productDetails = [...necklaceProductDetails, ...ringProductDetails];

class ProductProvider extends Component {
  state = {
    products: [],
    productDetails: productDetails,
    cart: [],
    inCart: false,
    modalOpen: false,
    isSideModalOpen: false,

    modalProduct: {},
    cartTotal: 0,
    itemsTotal: 0,
    isAdded: false,
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

  calculatePriceWithMaterial = (id, material) => {
    let tempProducts = [...this.state.products];
    const index = this.getIndex(id);
    const product = { ...tempProducts[index] };
    tempProducts[index] = product;
    const price = product.price;
    const gold = product.selectedMaterial.gold;
    const silver = product.selectedMaterial.silver;
    const bronze = product.selectedMaterial.bronze;
    if (material === "gold") {
      return gold + price;
    }
    if (material === "silver") {
      return silver + price;
    }

    return bronze + price;
  };

  increment = (id, material) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    selectedProduct.count[material] += 1;
    const price = this.calculatePriceWithMaterial(id, material);
    selectedProduct.total[material] += price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
        this.calcUpdateTotalItems();
      }
    );
  };

  decrement = (id, material) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count[material] -= 1;

    const price = this.calculatePriceWithMaterial(id, material);

    if (product.count[material] === 0) {
      this.removeItem(id, material);
    } else {
      product.total[material] = product.count[material] * price;

      this.setState(
        () => {
          return { cart: tempCart };
        },
        () => this.addTotals(),
        this.calcUpdateTotalItems()
      );
    }
  };

  removeItem = (id, material) => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count[material] = 0;
    removedProduct.total[material] = 0;

    this.setState(
      () => {
        return { cart: [...tempCart], products: [...tempProducts] };
      },
      () => {
        this.addTotals();
        this.calcUpdateTotalItems();
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
        this.calcUpdateTotalItems();
      }
    );
  };

  addTotals = () => {
    let cartTotal = 0;

    let Counter = { gold: 0, silver: 0, bronze: 0 };

    this.state.cart.forEach((item) => {
      Counter.gold += item.total.gold;
      Counter.silver += item.total.silver;
      Counter.bronze += item.total.bronze;
      cartTotal += item.total.gold + item.total.silver + item.total.bronze;
    });

    this.setState(() => {
      return { cartTotal: cartTotal };
    });
  };

  getIndex = (id) => {
    const index = this.state.products.findIndex((elem) => elem.id === id);
    return index;
  };

  isInCart = (id) => {
    const index = this.state.cart.findIndex((elem) => elem.id === id);
    return index != -1;
  };

  isInCart = (id) => {
    const index = this.state.cart.findIndex((elem) => elem.id === id);
    return index != -1;
  };

  addToCart = (id, material) => {
    const index = this.getIndex(id);
    const product = { ...this.state.products[index] };

    product.inCart = true;

    product.count = { gold: 0, silver: 0, bronze: 0 };
    product.count[material] += 1;

    const price = this.calculatePriceWithMaterial(id, material);
    product.total[material] = price;
    this.setState(
      () => {
        return {
          isAdded: true,
          cart: [...this.state.cart, product],
        };
      },
      () => {
        this.addTotals();
        this.calcUpdateTotalItems();
      }
    );
  };

  calcUpdateTotalItems = () => {
    let itemsTotal = 0;
    let Counter = { gold: 0, silver: 0, bronze: 0 };
    this.state.cart.forEach((item) => {
      Counter.gold += item.count.gold;
      Counter.silver += item.count.silver;
      Counter.bronze += item.count.bronze;
      itemsTotal += item.count.gold + item.count.silver + item.count.bronze;
    });
    this.setState(() => {
      return { itemsTotal };
    });
  };

  openSideModal = () => {
    this.setState(() => {
      return { isSideModalOpen: true };
    });
  };

  closeSideModal = () => {
    this.setState(() => {
      return { isSideModalOpen: false };
    });
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false, isAdded: false };
    });
  };

  incrementCartProduct = (id, material) => {
    if (this.isInCart(id)) {
      return this.increment(id, material);
    } else {
      return this.addToCart(id, material);
    }
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          closeSideModal: this.closeSideModal,
          incrementCartProduct: this.incrementCartProduct,
          openSideModal: this.openSideModal,

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
