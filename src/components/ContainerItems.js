import React, { useState, useEffect } from "react";

import ".././style.css";

import ItemListContainer from "./ItemListContainer";

import stockProductos from ".././stock";

function ContainerItems() {
  let [productos, setProductos] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        setProductos(stockProductos);
      }, 2000);

      resolve("Exito en la operacion!");
      reject("Error, algo no anda bien!");
    });
    tarea.then(
      (result) => console.log(result),
      (err) => console.log(err)
    );
  }, [productos]);

  return (
    <div id="divGeneralItems">
      {productos.map((i) => {
        return (
          <ItemListContainer
            key={i.id}
            imagen={i.imagen}
            nombre={i.nombre}
            precio={i.precio}
            stock={i.stock}
          />
        );
      })}
    </div>
  );
}

export default ContainerItems;
