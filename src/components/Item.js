import React from "react";

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

      <ItemDetailContainer producto={producto} />
    </>
  );
}

export default Item;
