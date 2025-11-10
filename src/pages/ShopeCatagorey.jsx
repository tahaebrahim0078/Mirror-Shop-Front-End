import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopeContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Items from "../components/item/items";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  // 👇 Check if products are still loading
  if (!all_products || all_products.length === 0) {
    return (
      <div className="shop-category">
        <img className="shopCategory-bunner" src={props.banner} alt="" />
        <p className="loading-text">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="shop-category">
      <img className="shopCategory-bunner" src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1–12</span> out of {all_products.length} products
        </p>
        <div className="shopCategory-sort">
          <p>Sort by</p>
          <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopCategory-products">
        {all_products
          .filter((item) => item.category === props.category)
          .map((item, i) => (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>

      <div className="shopCategory-loadMore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
