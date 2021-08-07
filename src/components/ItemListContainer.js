import React, { useState } from "react";

import ".././style.css";

import Item from "./Item";

import ItemCount from "./ItemCount";

function ItemListContainer({ imagen, nombre, precio, stock }) {
  const [producto, setProducto] = useState({ imagen, nombre, precio, stock });

  return (
    <div className="divItem">
      <Item
        img={producto.imagen}
        nombre={producto.nombre}
        precio={producto.precio}
      />
      <ItemCount valorInicial={1} stock={producto.stock} />
    </div>
  );
}

export default ItemListContainer;
