import React, { useState, useEffect } from "react";
import "./popular.css";
import Item from "../item/items";

const Popular = () => {
  const [data_product, setData_product] = useState([]);
  const [loading, setLoading] = useState(true); //  loading state

  useEffect(() => {
    fetch("https://mirror-shop-backend-3.onrender.com/popularinwomen")
      .then((response) => response.json())
      .then((data) => {
        setData_product(data);
        setLoading(false); //  stop loading after data fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // stop loading even if error
      });
  }, []);

  return (
    <div className="main-popular">
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      {loading ? ( // show loading message
        <p className="loading-text">Loading products...</p>
      ) : (
        <div className="popular-item">
          {data_product.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Popular;
