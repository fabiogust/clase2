import React from "react";

import ".././style.css";

import Item from "./Item";

import ItemCount from "./ItemCount";

function ItemListContainer({ producto }) {
  return (
    <div className="divItem">
      <Item producto={producto} />
    </div>
  );
}

export default ItemListContainer;

/* <ItemCount valorInicial={1} stock={producto.stock} /> */
