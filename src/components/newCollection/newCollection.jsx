import React, { useEffect, useState } from "react";
import "./newCollection.css";

import Item from "../item/items";

const NewCollection = () => {
  const [new_collections, setNew_collections] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://mirror-shop-backend-3.onrender.com/newcollections")
      .then((response) => response.json())
      .then((data) => {
        setNew_collections(data);
        setLoading(false); //  stop loading after data fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // stop loading even if error
      });
  }, []);

  return (
    <div className="main-new-collection">
      <div className="new-collection">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        {loading ? ( // show loading message
          <p className="loading-text">Loading products...</p>
        ) : (
          <div className="popular-item">
            {new_collections.map((item, i) => (
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

export default NewCollection;
