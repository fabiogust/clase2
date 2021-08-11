import React, { useState, useEffect } from "react";

import ".././style.css";

import ItemListContainer from "./ItemListContainer";

import stockProductos from ".././stock";

function ContainerItems() {
  let [productos, setProductos] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(stockProductos);
        reject("Error, algo no anda bien!");
      }, 2000);
    });
    tarea.then(
      (result) => setProductos(result),
      (err) => console.log(err)
    );
  });

  return (
    <div id="divGeneralItems">
      {productos.map((producto) => {
        return <ItemListContainer key={producto.id} producto={producto} />;
      })}
    </div>
  );
}

export default ContainerItems;
