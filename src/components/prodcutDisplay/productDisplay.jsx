import React, { useContext } from "react";
import "./productDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../context/ShopeContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="prodcutDisplay-left">
        <div className="prodcutDisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="prodcutDisplay-img">
          <img className="productDisplay-mainIMG" src={product.image} alt="" />
        </div>
      </div>
      <div className="prodcutDisplay-right">
        <h1>{product.name}</h1>
        <div className="prodcutDisplay-RGIHT-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productDisplay-rightPriecs">
          <div className="productDisplay-rightPriecs-old">
            ${product.old_price}
          </div>
          <div className="productDisplay-rightPriecs-new">
            ${product.new_price}
          </div>
        </div>
        <div className="prodcutDisplay-right-descreption">
          Amigos is a 2023 Indian Telugu-language action-thriller film written
          and directed by Rajendra Reddy. The film features Nandamuri Kalyan Ram
        </div>
        <div className="prodcutDisplay-right-size">
          <h1>Select Size</h1>
          <div className="prodcutDisplay-right-sizezz">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="prodcutDisplay-right-categorey">
          <span>Category :</span>
          {product.category} , T-shirt, Crop Top
        </p>
        <p className="prodcutDisplay-right-categorey">
          <span>Tags :</span>Modren,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
