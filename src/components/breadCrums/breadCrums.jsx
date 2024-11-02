import React from "react";
import "./breadCrums.css";
import arrow_icon from "../assets/breadcrum_arrow.png";


const BreadCrums = (props) => {
  const {product} = props;
  return (
    <div className="breadCrums">
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name} 
    </div>
  );
};

export default BreadCrums;
