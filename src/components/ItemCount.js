import React, { useState } from "react";

import ".././style.css";

function ItemCount({ stock, valorInicial, onAgregar }) {
  const [value, setValue] = useState(valorInicial);

  return (
    <div>
      <button
        className="boton"
        onClick={() => {
          value <= 1 ? setValue(1) : setValue(value - 1);
        }}
      >
        -
      </button>

      <span className="span">{value}</span>
      <button
        className="boton"
        onClick={() => {
          value >= stock ? setValue(stock) : setValue(value + 1);
        }}
      >
        +
      </button>
      <button onClick={onAgregar}>Agregar al carrito</button>
    </div>
  );
}
export default ItemCount;
