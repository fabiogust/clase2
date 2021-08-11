import React from "react";

import ".././style.css";

function ItemDetail({ detalle, onSalir }) {
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
          <button className="margen itemDetailBotonSalir" onClick={onSalir}>
            salir
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
