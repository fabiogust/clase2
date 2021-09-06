import React, { useContext } from "react";

import ".././style.css";

import carrito from ".././img/carrito2.svg";

import ".././style.css";

import { CartContext } from "../context/CartContext";

function Carrito() {
  if (JSON.parse(localStorage.getItem("guardadoEnLocalStorage")) == null) {
    localStorage.setItem("guardadoEnLocalStorage", JSON.stringify([]));
  }

  const { carritoLength, valorTotal } = useContext(CartContext);

  const retomarCompra = () => {
    return <div className="retomarCompra">Retomar compra.</div>;
  };

  const validar = () => {
    if (
      (JSON.parse(localStorage.getItem("guardadoEnLocalStorage")).length !==
        0 &&
        valorTotal() === 0) ||
      valorTotal() === undefined
    ) {
      return retomarCompra();
    } else if (valorTotal() !== 0) {
      return carritoLength();
    }
  };

  return (
    <>
      <li className="hoverCarrito liCard">
        <img src={carrito} className="carrito" alt="Carrito" />

        {validar()}
      </li>
    </>
  );
}

export default Carrito;
