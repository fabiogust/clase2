import React, { useContext } from "react";

import ".././style.css";

import carrito from ".././img/carrito2.svg";

import ".././style.css";

import { CartContext } from "../context/CartContext";

function Carrito() {
  const { carritoLength } = useContext(CartContext);

  return (
    <>
      <li className="hoverCarrito liCard">
        <img src={carrito} className="carrito" alt="Carrito" />

        {carritoLength()}
      </li>
    </>
  );
}

export default Carrito;
