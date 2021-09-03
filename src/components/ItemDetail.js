import React, { useState, useContext } from "react";

import { NavLink } from "react-router-dom";

import ItemCount from "./ItemCount";

import ".././style.css";

import { CartContext } from "../context/CartContext";

function ItemDetail({ detalle, onSalir }) {
  const { agregarProducto } = useContext(CartContext);

  const [cantidadAgregada, setCantidadAgregada] = useState(0);

  const agregar = (e) => {
    setCantidadAgregada(e.target.value);
    agregarProducto(detalle, e.target.value);
  };

  const compra = () => {
    return (
      <NavLink to={"/carrito"}>
        <button className="ContinuarMiCompra botonHover margen">
          Continuar mi compra
        </button>
      </NavLink>
    );
  };
  const contador = () => {
    return (
      <ItemCount
        stock={Number(detalle.stock)}
        valorInicial={Number("1")}
        onAdd={agregar}
      />
    );
  };

  return (
    <div className="itemDetailDiv">
      <div className="itemDetail margen">
        <div className="divImg ">
          <img src={detalle.imagen} alt={"sin imagen " + detalle.imagen} />
        </div>
        <div className="divRelativo">
          <div className="margen">{detalle.nombre}</div>
          <div className="margen">Talle: {detalle.talle}</div>
          <div className="margen">Color: {detalle.color}</div>
          <div className="margen ">{"$ " + detalle.precio}</div>

          {cantidadAgregada == 0 ? contador() : compra()}

          <NavLink to={""} activeClassName="" className="">
            <button
              className="margen itemDetailBotonSalir botonHover"
              onClick={onSalir}
            >
              salir
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
