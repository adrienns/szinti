import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
// import {
//   necklaceProductList,
//   singleProduct,
// } from "../products_display/NecklacesData";

const FREE_SHIPPING_LIMIT = 10000;

export const ProductContext = createContext();

const EXPIRATION_DURATION = 1000 * 60 * 60 * 12; // 2 min

let objectFromLocalStorage = JSON.parse(localStorage.getItem("key")) || {};

const prevDate = objectFromLocalStorage.timestamp;
const currentDate = new Date().getTime().toString();
if (currentDate - prevDate > EXPIRATION_DURATION) {
  localStorage.setItem("key", JSON.stringify({}));
  objectFromLocalStorage = {};
}
console.log(objectFromLocalStorage);

const ProductProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productLists, setProductLists] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Hungary");
  const [singleProduct, setSingleProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(objectFromLocalStorage.cart || []);
  const [inCart, setinCart] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSideModalOpen, setisSideModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const [itemsTotal, setItemsTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [isAdded, setisAdded] = useState(false);

  useEffect(() => {
    let unmounted = false;
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${window.api_url}/api/data`);
        const { necklaceProductList, earingProductList } = data;

        const productLists = [...necklaceProductList, ...earingProductList];

        if (!unmounted) {
          setProductLists(productLists);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        // setLoading(false);
      }
    };
    fetchData();
    return () => {
      unmounted = true;
    };
  }, []);

  useEffect(() => {
    setAllProducts();
  }, [productLists]);

  //add shipping cost
  const handleValueChange = (selectedShippingOption) => {
    setSelectedOption(selectedShippingOption);
  };

  useEffect(() => {
    updateWithShippingCost();
  }, [selectedOption]);

  const calculateShippingCost = () => {
    let shippingCost = 0;
    if (selectedOption === "Hungary") {
      shippingCost = 1000;
    }
    if (selectedOption === "EU") {
      shippingCost = 100;
    }
    return shippingCost;
  };

  const updateWithShippingCost = () => {
    let shippingCost = calculateShippingCost();
    if (cartTotal > FREE_SHIPPING_LIMIT) {
      return setFinalTotal(cartTotal);
    }
    if (cartTotal == 0) {
      return setSelectedOption("Hungary"), setFinalTotal(0);
    } else {
      return setFinalTotal(cartTotal + shippingCost);
    }
  };

  // Creating local storage with expatitation

  useEffect(() => {
    const currentDate = new Date().getTime().toString();
    const storedobject = { cart: cart, timestamp: currentDate };
    localStorage.setItem("key", JSON.stringify(storedobject));
  }, [cart]);

  //Set up a fresh data order to not to change the original data.In order to get the value not the reference.

  const setAllProducts = () => {
    let tempProducts = [];

    productLists.forEach((item) => {
      const singleItem = { ...item };

      tempProducts = [...tempProducts, singleItem];
    });
    if (tempProducts == undefined) {
    }

    setProducts(tempProducts);
  };

  //Get item
  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const handleSingleProduct = (id) => {
    const product = getItem(id);
    setSingleProduct(product);
  };

  const increment = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    selectedProduct.count += 1;
    const price = selectedProduct.price;
    selectedProduct.total = price * selectedProduct.count;

    setCart([...tempCart]);
  };

  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count -= 1;
    const price = product.price;

    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * price;
      setCart(tempCart);
    }
  };

  const removeItem = (id) => {
    let tempCart = [...cart];
    let removedProduct = tempCart.find((item) => item.id == id);
    removedProduct.total = 0;
    removedProduct.count = 0;

    if (
      Object.values(removedProduct.count).reduce(
        (t, { value }) => t + value,
        0
      ) > 0
    ) {
      return (removedProduct.inCart = false);
    }
    setCart([...tempCart]);
  };

  const addTotals = () => {
    let cartTotal = 0;
    let Counter = 0;
    cart.forEach((item) => {
      Counter += item.total;
      cartTotal += item.total;
    });
    setCartTotal(cartTotal);
  };

  useEffect(() => {
    calcUpdateTotalItems();
    updateWithShippingCost();
  }, [cartTotal]);

  const getIndex = (id) => {
    const index = products.findIndex((elem) => elem.id === id);
    return index;
  };

  const isInCart = (id) => {
    const index = cart.findIndex((elem) => elem.id === id);
    return index != -1;
  };

  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count += 1;
    const price = product.price;
    product.total = price * product.count;
    setisAdded(true);
    setProducts(tempProducts);
    setCart([...cart, product]);
  };

  useEffect(() => {
    addTotals();
    updateWithShippingCost();
  }, [cart]);

  // sending data to sever side in order to calculate the the total sum and send it to paypal

  const calculateCartData = () => {
    let currentCart = [...cart];

    console.log(cart);

    let filteredCart = currentCart

      //filtering the cart as it is not removed from the local storage. what is the best practice?
      .filter((item) => item.count > 0)
      .map((elem) => {
        const { id, count, name, price } = elem;
        return { id, count, name, price };
      });
    const cartData = { filteredCart, selectedOption };
    return cartData;
  };

  const calcUpdateTotalItems = () => {
    let itemsTotal = 0;
    let Counter = 0;
    cart.forEach((item) => {
      Counter += item.count;
      itemsTotal += item.count;
    });

    setItemsTotal(itemsTotal);
  };

  const openSideModal = () => {
    setisSideModalOpen(true);
  };

  const closeSideModal = () => {
    setisSideModalOpen(false);
  };

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setisAdded(false);
  };

  const incrementCartProduct = (id) => {
    if (isInCart(id)) {
      return increment(id);
    } else {
      return addToCart(id);
    }
  };

  //  we need to reset the products as they are  copies when clearing the cart
  const clearCart = () => {
    setCart([]);
  };
  // useEffect(() => {
  //   setProducts(undefined);
  // }, [cart]);

  return (
    <ProductContext.Provider
      value={{
        selectedOption,
        singleProduct,
        products,
        cart,
        inCart,
        modalOpen,
        isSideModalOpen,
        modalProduct,
        cartTotal,
        itemsTotal,
        isAdded,
        finalTotal,
        loading,
        error,
        clearCart,
        increment,
        decrement,
        closeModal,
        openModal,
        addToCart,
        handleSingleProduct,
        handleValueChange,
        openSideModal,
        incrementCartProduct,
        closeSideModal,
        removeItem,
        calculateCartData,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
