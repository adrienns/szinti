import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const FREE_SHIPPING_LIMIT = 19000;

export const ProductContext = createContext();

const EXPIRATION_DURATION = 1000 * 60 * 60 * 12; // 2 min

let objectFromLocalStorage =
  JSON.parse(localStorage.getItem("shopping_cart")) || {};

const prevDate = objectFromLocalStorage.timestamp;
const currentDate = new Date().getTime().toString();
if (currentDate - prevDate > EXPIRATION_DURATION) {
  localStorage.setItem("shopping_cart", JSON.stringify({}));
  objectFromLocalStorage = {};
}

const cacheImages = async (srcArray) => {
  const promises = await srcArray.map((src) => {
    return new Promise(function (resolve, reject) {
      const img = new Image();
      img.src = src;
      img.onload = resolve();
      img.onerror = reject();
    });
  });

  await Promise.all(promises);
};

const ProductProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productLists, setProductLists] = useState([]);
  const [selectedOption, setSelectedOption] = useState(
    objectFromLocalStorage.selectedOption
  );
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
  const [currentSelectProduct, setSelected] = useState(undefined);

  console.log(selectedOption);
  useEffect(() => {
    let unmounted = false;
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/data`);
        const { necklaceProductList, earringProductList } = data;

        const productLists = [...necklaceProductList, ...earringProductList];

        const imgs1 = productLists.map((el) => {
          return el.firstImage;
        });

        const imgs2 = productLists.map((el) => {
          return el.secondImage;
        });

        const images = [...imgs1, ...imgs2];

        cacheImages(images);

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
      shippingCost = 1500;
    }
    if (selectedOption === "EU") {
      shippingCost = 2500;
    }
    return shippingCost;
  };

  const getCurrentProduct = () => {
    const id = currentSelectProduct;
    return getItem(id) || {};
  };

  const updateWithShippingCost = () => {
    let shippingCost = calculateShippingCost();

    if (cartTotal > FREE_SHIPPING_LIMIT) {
      return setFinalTotal(cartTotal);
    }
    if (cartTotal == 0) {
      return setSelectedOption("pickup"), setFinalTotal(0);
    } else {
      return setFinalTotal(cartTotal + shippingCost);
    }
  };

  // Creating local storage with expatitation

  useEffect(() => {
    const currentDate = new Date().getTime().toString();
    const storedobject = {
      cart: cart,
      selectedOption: selectedOption,
      timestamp: currentDate,
    };

    localStorage.setItem("shopping_cart", JSON.stringify(storedobject));
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
        setSelected,
        handleValueChange,
        openSideModal,
        incrementCartProduct,
        closeSideModal,
        removeItem,
        calculateCartData,
        getCurrentProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
