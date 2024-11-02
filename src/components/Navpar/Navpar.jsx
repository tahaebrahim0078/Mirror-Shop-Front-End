import React, { useRef, useState } from "react";
import "./Navpar.css";

import logo from "../assets/logo.png";

import cart_icon from "../assets/cart_icon.png";
import dropDawonIcon from "../assets/arrowws.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopeContext";

const Navpar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdwon_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="main-bavpar">
      <div className="small-header"></div>
      <div className="navpar">
        <a style={{textDecoration:"none"}} href="/">
          <div className="nav-logo">
            <img src={logo} alt="" />
            <p>MIRROR</p>
          </div>
        </a>

        <img
          className="dorpp"
          onClick={dropdwon_toggle}
          src={dropDawonIcon}
          alt=""
        />

        <ul ref={menuRef} className="nav-menu">
          <li
            onClick={(e) => {
              dropdwon_toggle(e);
              setMenu("shop");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/">
              shop
            </Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={(e) => {
              dropdwon_toggle(e);
              setMenu("men");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/men">
              men
            </Link>
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li
            onClick={(e) => {
              dropdwon_toggle(e);
              setMenu("women");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/women">
              women
            </Link>
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li
            onClick={(e) => {
              dropdwon_toggle(e);
              setMenu("kids");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/kids">
              kids
            </Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/logain">
              <button>login</button>
            </Link>
          )}

          <Link to="/cart">
            <img src={cart_icon} alt="" />
          </Link>

          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navpar;
