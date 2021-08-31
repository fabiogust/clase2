import React from "react";
import { NavLink, useParams } from "react-router-dom";

import ".././style.css";

import ItemDetailContainer from "./ItemDetailContainer";

function Item({ producto }) {
  const { imagen, nombre, precio } = producto;
  return (
    <>
      <div className="divImg">
        <img src={imagen} alt={"sin imagen " + imagen} />
      </div>
      <div className="margen">{nombre}</div>
      <div className="margen">{"$ " + precio}</div>

      <NavLink to={`/item/${producto.id}`} activeClassName="" className="">
        <button className="margen">ver detalle</button>
      </NavLink>

      <ItemDetailContainer producto={producto} />
    </>
  );
}

export default Item;

//onClick={mostrarDetalle}
