import React, { createContext, useState, useEffect } from "react";
// import {
//   necklaceProductList,
//   singleProduct,
// } from "../products_display/NecklacesData";
// import { ringsProductList } from "../rings/RingsData";

const FREE_SHIPPING_LIMIT = 10000;

export const ProductContext = createContext();

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const ProductProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [productLists, setProductLists] = useState({
    necklaces: [],
    rings: [],
  });
  const [selectedOption, setSelectedOption] = useState("Hungary");
  const [singleProduct, setSingleProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [newPricewithMaterial, setnewPricewithMaterial] = useState("");
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [inCart, setinCart] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isSideModalOpen, setisSideModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({});
  const [cartTotal, setCartTotal] = useState(0);
  const [itemsTotal, setItemsTotal] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [isAdded, setisAdded] = useState(false);

  // Get product lists from server -should be 2 separate fetch data function?
  const fetchData = async () => {
    try {
      setLoading(true);
      const res1 = await fetch(`${window.api_url}/api/necklaceProductList`);
      const necklacesData = await res1.json();
      const res2 = await fetch(`${window.api_url}/api/ringsProductList`);
      const ringsData = await res2.json();
      setLoading(false);
      setProductLists({ necklaces: necklacesData, rings: ringsData });
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Temporary - to delete
  useEffect(() => {
    console.log(productLists.necklaces);
    setAllProducts();
  }, [productLists]);

  const handleValueChange = (selectedShippingOption) => {
    setSelectedOption(selectedShippingOption);
  };

  useEffect(() => {
    updateWithShippingCost();
  }, [selectedOption]);

  const calculateShippingCost = () => {
    let shippingCost = 0;
    if (selectedOption === "others") {
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

  // Creating local storage

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //Set up a fresh data order to not to change the original data.In order to get the value not the reference.
  const setAllProducts = () => {
    let tempProducts = [];
    let mergedproductList = [...productLists.necklaces, ...productLists.rings];

    mergedproductList.forEach((item) => {
      const singleItem = { ...item };

      tempProducts = [...tempProducts, singleItem];
    });

    setProducts(tempProducts);
  };

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const handleSingleProduct = (id) => {
    const product = getItem(id);
    setSingleProduct(product);
  };

  //Calculating price including material

  const calculatePriceWithMaterial = (id, material) => {
    let tempProducts = [...products];
    const index = getIndex(id);
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

  const increment = (id, material) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    selectedProduct.count[material] += 1;
    const price = calculatePriceWithMaterial(id, material);
    selectedProduct.total[material] += price;

    setCart([...tempCart]);
  };

  const decrement = (id, material) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count[material] -= 1;

    const price = calculatePriceWithMaterial(id, material);

    if (product.count[material] === 0) {
      removeItem(id, material);
    } else {
      product.total[material] = product.count[material] * price;

      setCart(tempCart);
    }
  };

  const removeItem = (id, material) => {
    let tempCart = [...cart];
    // tempCart = tempCart.filter((item) => item.id !== id );
    let removedProduct = tempCart.find((item) => item.id == id);
    removedProduct.total[material] = 0;
    removedProduct.count[material] = 0;

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
    let Counter = { gold: 0, silver: 0, bronze: 0 };
    cart.forEach((item) => {
      Counter.gold += item.total.gold;
      Counter.silver += item.total.silver;
      Counter.bronze += item.total.bronze;
      cartTotal += item.total.gold + item.total.silver + item.total.bronze;
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

  const addToCart = (id, material) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];

    product.inCart = true;
    product.count = { gold: 0, silver: 0, bronze: 0 };
    product.count[material] += 1;

    const price = calculatePriceWithMaterial(id, material);
    product.total[material] = price;

    setisAdded(true);
    setProducts(tempProducts);
    setCart([...cart, product]);
  };

  useEffect(() => {
    addTotals();
    updateWithShippingCost();
  }, [cart]);

  const calcUpdateTotalItems = () => {
    let itemsTotal = 0;
    let Counter = { gold: 0, silver: 0, bronze: 0 };
    cart.forEach((item) => {
      Counter.gold += item.count.gold;
      Counter.silver += item.count.silver;
      Counter.bronze += item.count.bronze;
      itemsTotal += item.count.gold + item.count.silver + item.count.bronze;
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

  const incrementCartProduct = (id, material) => {
    if (isInCart(id)) {
      return increment(id, material);
    } else {
      return addToCart(id, material);
    }
  };

  const changePriceandMaterial = (value) => {
    let mergedproductList = [...productLists.necklaces, ...productLists.rings];
    mergedproductList.filter((item) => {
      const { selectedMaterial } = item;

      const { gold, silver, bronze } = selectedMaterial;
      if (value === "silver") {
        return setnewPricewithMaterial(silver);
      }

      if (value === "bronze") {
        return setnewPricewithMaterial(bronze);
      }
      return setnewPricewithMaterial(gold);
    });
  };

  return (
    <ProductContext.Provider
      value={{
        selectedOption,
        singleProduct,
        products,
        newPricewithMaterial,
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
        changePriceandMaterial,
        removeItem,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
