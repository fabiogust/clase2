import React, { useState, useEffect, useContext } from "react";

//import { useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";

import ItemCount from "./ItemCount";

import ".././style.css";

import { CartContext } from "../context/CartContext";

function ItemDetail({ detalle, onSalir }) {
  const { agregarProducto } = useContext(CartContext);

  const [cantidadAgregada, setCantidadAgregada] = useState(0);
  //  const { params } = useParams();
  //  console.log("params" + params);
  const agregar = (e) => {
    setCantidadAgregada(e.target.value);

    agregarProducto(detalle, e.target.value);

    //console.log("detalle, e.target.value", detalle + " | " + e.target.value);
  };

  const compra = () => {
    return (
      <NavLink to={"/carrito"}>
        <button>Terminar mi compra</button>
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
      <div className="itemDetail">
        <div className="divImg ">
          <img src={detalle.imagen} alt={"sin imagen " + detalle.imagen} />
        </div>
        <div className="divRelativo">
          <div className="margen">{detalle.nombre}</div>
          <div className="margen">Talle: {detalle.talle}</div>
          <div className="margen">Color: {detalle.color}</div>
          <div className="margen ">{"$ " + detalle.precio}</div>
          {/*  <ItemCount
            stock={detalle.stock}
            valorInicial={detalle.cantidad}
            onAdd={agregar}
          /> */}
          {cantidadAgregada == 0 ? contador() : compra()}
          <NavLink to={""} activeClassName="" className="">
            <button className="margen itemDetailBotonSalir" onClick={onSalir}>
              salir
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

//<NavLink to={} activeClassName="" className="" ></NavLink>

/*   useEffect(() => {
    const compra = () => {
      if (cantidadAgregada == 0) {
        return (
          <ItemCount
            stock={detalle.stock}
            valorInicial={detalle.cantidad}
            onAdd={agregar}
          />
        );
      } else if (cantidadAgregada > 0) {
        return (
          <NavLink>
            <button>Terminar mi compra</button>
          </NavLink>
        );
      }
    };
  }, []); */
