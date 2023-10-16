import React from "react";
import storeItems from "../information/products.json";
import { Item } from "./Item";

export const ListItem = () => {
  return (
    <div className="items-list">
      {storeItems.map((product, idx) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
};