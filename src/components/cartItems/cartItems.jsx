import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopeContext";
import removeIcon from "../assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItem, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItem-formt-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
       
      {all_products.map((e) => {
        if(cartItem[e.id]>0){
          return (
            <div>
              <div className="cartItem-formt cartItem-formt-main">
                <img src={e.image} alt="" className="cartIcon-prodcutIcon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartItem-quantity">{cartItem[e.id]}</button>
                <p>${e.new_price * cartItem[e.id]}</p>
                <img
                  className="cartItems-remove-icon"
                  src={removeIcon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-Total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-totalItems">
              <p>Suptotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-totalItems">
              <p>Shiping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-totalItems">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCED TO CHCKOUT</button>
        </div>
        <div className="cartItems-promoCode">
          <p>If you have promo code,Enter it here</p>
          <div className="cartItems-PromoBox">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
