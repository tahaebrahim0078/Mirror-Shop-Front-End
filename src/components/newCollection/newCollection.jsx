import React, { useEffect, useState } from "react";
import "./newCollection.css";

import Item from "../item/items";

const NewCollection = () => {
  const [new_collections, setNew_collections] = useState([]);

  useEffect(() => {
    fetch("https://mirror-shop-backend-3.onrender.com/newcollections")
      .then((response) => response.json())
      .then((data) => setNew_collections(data));
  }, []);
   
  return (
    <div className="new-collection">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
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

export default NewCollection;
