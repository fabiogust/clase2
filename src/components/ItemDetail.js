import React from "react";

//import { useParams } from "react-router-dom";

import { NavLink } from "react-router-dom";

import ".././style.css";

function ItemDetail({ detalle, onSalir }) {
  //  const { params } = useParams();
  //  console.log("params" + params);

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
          <NavLink to={"/"} activeClassName="" className="">
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
