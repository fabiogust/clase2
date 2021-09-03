import React, { useState } from "react";

import ".././style.css";

function ItemCount({ stock, valorInicial, onAdd }) {
  const [cantidad, setCantidad] = useState(valorInicial);

  return (
    <div>
      <button
        className="boton menos"
        onClick={() => {
          cantidad <= 1 ? setCantidad(1) : setCantidad(cantidad - 1);
        }}
      >
        -
      </button>
      <span className="span">{cantidad}</span>
      <button
        className="boton mas"
        onClick={() => {
          cantidad >= stock ? setCantidad(stock) : setCantidad(cantidad + 1);
        }}
      >
        +
      </button>
      <button className="botonHover padding" onClick={onAdd} value={cantidad}>
        Agregar al carrito
      </button>
    </div>
  );
}
export default ItemCount;
