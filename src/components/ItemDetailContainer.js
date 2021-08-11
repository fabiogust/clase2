import React, { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";

function ItemDetailContainer({ producto }) {
  // const [product, setProduct] = useState(producto);
  const [detalle, setDetalle] = useState("");

  const mostrarDetalle = () => {
    const tareaDetail = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(<ItemDetail detalle={producto} onSalir={cerrarDetalle} />);
        reject("Error, en el detalle!");
      }, 2000);
    });
    tareaDetail.then(
      (result) => setDetalle(result),
      (err) => console.log(err)
    );
  };

  const cerrarDetalle = () => {
    setDetalle("");
  };

  return (
    <>
      <button className="margen" onClick={mostrarDetalle}>
        ver detalle
      </button>

      {detalle}
    </>
  );
}

export default ItemDetailContainer;
