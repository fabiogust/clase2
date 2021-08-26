import React, { useState } from "react";

import ".././style.css";

function ItemCount({ stock, valorInicial, onAdd }) {
  const [cantidad, setCantidad] = useState(valorInicial);

  return (
    <div>
      <button
        className="boton"
        onClick={() => {
          cantidad <= 1 ? setCantidad(1) : setCantidad(cantidad - 1);
        }}
      >
        -
      </button>
      <span className="span">{cantidad}</span>
      <button
        className="boton"
        onClick={() => {
          cantidad >= stock ? setCantidad(stock) : setCantidad(cantidad + 1);
        }}
      >
        +
      </button>
      <button onClick={onAdd} value={Number(cantidad)}>
        Agregar al carrito
      </button>
    </div>
  );
}
export default ItemCount;
