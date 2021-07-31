import React from "react";

import ".././style.css";

import carrito from ".././img/carrito2.svg";

import { estilo } from ".././estilos";

function Carrito() {
  return (
    <li className="hoverCarrito">
      <img src={carrito} style={estilo.carrito} alt="Carrito" />
    </li>
  );
}

export default Carrito;
