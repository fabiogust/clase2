import ItemListContainer from "../components/ItemListContainer";

import React, { useState, useEffect } from "react";

import { getFirestore } from "../firebase";

import { createContext } from "react";

import hombrePreguntando from "../img/figura2.png";

import Loading from ".././components/Loading";

export const BuscadorContext = createContext();

const BuscadorProvider = ({ children }) => {
  const [productosBuscar, setProductosBuscar] = useState([]);
  const [encontrado, setEncontrado] = useState(productosBuscar);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("productosDeIndumentaria");

    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No items");
        }
        setProductosBuscar(
          querySnapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }))
        );
      })
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, []);

  useEffect(() => {
    setEncontrado(productosBuscar);
  }, [productosBuscar]);

  const buscar = (e) => {
    let buscando = productosBuscar.filter((p) => {
      return p.nombre
        .replaceAll(" ", "")
        .toUpperCase()
        .includes(e.target.value.replaceAll(" ", "").toUpperCase());
    });
    setEncontrado(buscando);
    console.log(`buscando`, buscando);
  };
  const renderBusq = () => {
    return (
      <div>
        <div id="divGeneralItems">
          {encontrado.map((producto) => {
            return <ItemListContainer key={producto.id} producto={producto} />;
          })}
        </div>
      </div>
    );
  };

  const nada = () => {
    return (
      <>
        <img src={hombrePreguntando} />
      </>
    );
  };

  const renderBusqueda = () => {
    return <>{encontrado.length == 0 ? nada() : renderBusq()}</>;
  };

  return (
    <BuscadorContext.Provider
      value={{
        buscar: buscar,
        renderBusqueda: renderBusqueda,
      }}
    >
      {loading && <Loading />}
      {children}
    </BuscadorContext.Provider>
  );
};

export { BuscadorProvider };
