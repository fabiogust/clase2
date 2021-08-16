import React, { useState, useEffect } from "react";

import ".././style.css";

import ItemListContainer from "./ItemListContainer";

//import stockProductos from ".././stock";
import { useParams } from "react-router-dom";

import { remeras, pantalones, lenceria } from ".././stock";

const stockTotal = remeras.concat(pantalones, lenceria);

function ContainerItems() {
  let [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  console.log(`categoryId`, categoryId);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (categoryId) {
          case "lenceria":
            resolve(lenceria);
            break;
          case "pantalones":
            resolve(pantalones);
            break;
          case "remeras":
            resolve(remeras);
            break;
          case undefined: //no hace falta ponerlo porque el default hace lo mismo y mas, pero lo pongo para acostumbrarme a que undefined tambien es un valor
            resolve(stockTotal);
            break;
          default:
            resolve(stockTotal);
            break;
        }

        // resolve(dataProductos);
        reject("Error, algo no anda bien!");
      }, 1000);
    });
    tarea.then(
      (result) => setProductos(result),
      (err) => console.log(err)
    );
  }, [categoryId]);

  return (
    <div id="divGeneralItems">
      {productos.map((producto) => {
        return <ItemListContainer key={producto.id} producto={producto} />;
      })}
    </div>
  );
}

export default ContainerItems;
