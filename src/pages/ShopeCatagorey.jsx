import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopeContext";
import dropdwon_icon from '../components/assets/dropdown_icon.png'
import Items from "../components/item/items";
const ShopeCatagorey = (props) => {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopCategory-bunner" src={props.banner} alt="" />
        <div className="shopCategory-indexSort">
          <p><span>Showing 1-12</span>out of 36 products</p>
          <div className="shopCtegorey-sort">
            <p>Sort by</p>
             <img src={dropdwon_icon} alt="" />
          </div>
        </div>
<div className="shopCategory-products">
  {all_products.map((item,i) => {
    if(props.category=== item.category) {
      return <Items
      key={i}
      id={item.id}
      name={item.name}
      image={item.image}
      new_price={item.new_price}
      old_price={item.old_price}
    /> 
    }else{
      return null;
    }
  })}
</div>
<div className="shopCategory-loadMore">
  Explore More
</div>
    </div>
  );
};

export default ShopeCatagorey;
