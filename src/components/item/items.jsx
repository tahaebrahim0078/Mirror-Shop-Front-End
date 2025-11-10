import React from "react";
import "./item.css";
import { Link } from "react-router-dom";
const Items = (props) => {
  return (
    <div className="mainItem">
      <div className="item">
        <Link className="linkeItem" onClick={window.scrollTo({ top: 0 })} to={`/product/${props.id}`}>
          <img loading="lazy" className="imggg" src={props.image} alt="" />
          <p>{props.name}</p>

          <div className="item-prices">
            <div className="item-prices-new">${props.new_price}</div>
            <div className="item-prices-old">${props.old_price}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Items;
