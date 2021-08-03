import React from "react";

import ".././style.css";

import ItemCount from "./ItemCount";

let valorInicial = 1;
let stockProducto = 5;

function ItemListContainer() {
  return (
    <div className="divItem">
      <div>img</div>
      <div>detalle</div>
      <div>precio</div>
      <ItemCount valorInicial={valorInicial} stock={stockProducto} />
    </div>
  );
}

export default ItemListContainer;
