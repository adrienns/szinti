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
    modalProduct: {},
    cartTotal: 0,
    itemsTotal: 0,
    isNotAdded: true,
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

  // handleSelectedMaterial = (event) => {
  //   this.setState({ valueMaterial: event.target.value });
  // };

  getIndex = (id) => {
    const index = this.state.products.findIndex((elem) => elem.id === id);
    return index;
  };

  calculatePriceWithMaterial = (id, material) => {
    debugger;
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

  addToCart = (id, material) => {
    let tempProducts = [...this.state.products];
    const index = this.getIndex(id);
    const product = { ...tempProducts[index] };
    tempProducts[index] = product;
    product.inCart = true;
    product.count = 1;

    product.material = material;
    debugger;
    const price = this.calculatePriceWithMaterial(id, material);
    product.total = price;
    debugger;
    this.setState(
      () => {
        return {
          products: tempProducts,

          cart: [...this.state.cart, product],
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

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  incrementCartProduct = (id, material) => {
    const product = this.getItem(id);
    if (product.inCart == false) {
      return this.addToCart(id, material);
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
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          // handleSelectedMaterial: this.handleSelectedMaterial,
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
