import ItemListContainer from "../components/ItemListContainer";

import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

import { createContext } from "react";

export const BuscadorContext = createContext();

const BuscadorProvider = ({ children }) => {
  const { categoryId } = useParams();
  const [encontrado, setEncontrado] = useState("");

  const buscar = (e) => {
    //let valor = e.target.value;

    const db = getFirestore();
    const itemCollection = db.collection("productosDeIndumentaria");
    let resuladoBusqueda = itemCollection.where(
      "nombre",
      "==",
      `${e.target.value}`
    );

    resuladoBusqueda
      .get()
      .then((querySnapshot) =>
        setEncontrado(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
      )
      .catch((err) => console.log("err", err));
  };

  const renderBusqueda = () => {
    return (
      <div>
        <h1>Aca van los resultados de la busqueda</h1>

        <div id="divGeneralItems">
          {encontrado.map((producto) => {
            return <ItemListContainer key={producto.id} producto={producto} />;
          })}
        </div>
      </div>
    );
  };

  return (
    <BuscadorContext.provider
      value={{
        buscar: buscar(),
        renderBusqueda: renderBusqueda(),
      }}
    >
      {children}
    </BuscadorContext.provider>
  );
};

export { BuscadorProvider };

//return <BuscadorContext.provider>{children}</BuscadorContext.provider>;
