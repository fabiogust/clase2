import React from "react";

import ".././style.css";

import Item from "./Item";

function ItemListContainer({ producto }) {
  return (
    <div className="divItem">
      <Item producto={producto} />
    </div>
  );
}

export default ItemListContainer;
