import React from "react";

import ".././style.css";

import carrito from ".././img/carrito2.svg";

//import { estilo } from ".././estilos";

import ".././style.css";

function Carrito() {
  return (
    <li className="hoverCarrito">
      <img src={carrito} className="carrito" alt="Carrito" />
    </li>
  );
}

export default Carrito;
