import React ,{useState ,useEffect} from "react";
import "./RelatedProdcuts.css";

import Item from "../item/items";
const RelatedProdcuts = () => {
  
    const [related_prodcut, setRelated_prodcut] = useState([]);
  
    useEffect(() => {
      fetch("https://mirror-shop-backend-3.onrender.com/relatedProdcutss")
        .then((response) => response.json())
        .then((data) => setRelated_prodcut(data));
    }, []);
  return (
    <div className="relatedProdcuts">
      <h1>Related Prodcuts</h1>
      <hr />
      <div className="relatedProdcuts-item">
        {related_prodcut.map((item, i) => {
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

export default RelatedProdcuts;
