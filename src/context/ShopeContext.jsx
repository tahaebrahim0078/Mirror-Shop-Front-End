import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const getDefualtCart = () => {
  let cart = {};

  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_products, setAll_products] = useState([]);
  const [cartItem, setCartItem] = useState(getDefualtCart());

  useEffect(() => {
    fetch("https://mirror-shop-backend-3.onrender.com/allproducts")
      .then((response) => response.json())
      .then((data) => setAll_products(data));

      if(localStorage.getItem('auth-token')){
        fetch('https://mirror-shop-backend-3.onrender.com/getcart',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'auth-token':`${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json',
          },
          body:""
        }).then((response)=> response.json()).then((data)=> setCartItem(data))
      }

  }, []);

  console.log(cartItem);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
    if(localStorage.getItem('auth-token')){
      fetch("https://mirror-shop-backend-3.onrender.com/addtocart",{
        method: 'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json'
        },
        body: JSON.stringify({"itemId":itemId}),
      })
      .then((response)=> response.json()).then((data)=>console.log(data));
    }
  };
  const removeFromCart = (itemId) => {

    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
    if(localStorage.getItem('auth-token')){
      fetch("https://mirror-shop-backend-3.onrender.com/removefromcart",{
        method: 'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json'
        },
        body: JSON.stringify({"itemId":itemId}),
      })
      .then((response)=> response.json()).then((data)=>console.log(data));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItems += cartItem[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    getTotalCartAmount,
    all_products,
    cartItem,
    addToCart,
    removeFromCart,
    getTotalCartItems,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
