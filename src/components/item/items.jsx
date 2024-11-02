import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
const Items = (props) => {
  return (
    <div className="mainItem">
    <div className="item">
      <Link  to={`/product/${props.id}`} ><img className="imggg"  onClick={window.scrollTo({top:0})} src={props.image} alt="" /></Link>
      <p>{props.name}</p>

      <div className="item-prices">
        <div className="item-prices-new">
         ${props.new_price}
        </div>
        <div className="item-prices-old">
        ${props.old_price}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Items;
