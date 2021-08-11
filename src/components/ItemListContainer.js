import React from "react";

import ".././style.css";

import Item from "./Item";

import ItemCount from "./ItemCount";

function ItemListContainer({ producto }) {
  return (
    <div className="divItem">
      <Item producto={producto} />
      <ItemCount valorInicial={1} stock={producto.stock} />
    </div>
  );
}

export default ItemListContainer;
