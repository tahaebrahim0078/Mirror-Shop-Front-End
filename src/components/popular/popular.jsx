import React , {useState,useEffect} from "react";
import "./popular.css";

import Item from "../item/items";
const Popular = () => {
  const [data_product, setData_product] = useState([]);

  useEffect(() => {
    fetch("https://mirror-shop-backend-3.onrender.com/popularinwomen")
      .then((response) => response.json())
      .then((data) => setData_product(data));
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
