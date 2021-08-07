import React from "react";

import ".././style.css";

function Item({ img, nombre, precio }) {
  return (
    <>
      <div className="divImg">
        <img src={img} alt={"sin imagen " + img} />
      </div>
      <div className="margen">{nombre}</div>
      <div className="margen">{"$ " + precio}</div>
    </>
  );
}

export default Item;
