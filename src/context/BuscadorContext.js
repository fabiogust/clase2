import ItemListContainer from "../components/ItemListContainer";

import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

import { createContext } from "react";

import hombrePreguntando from "../img/figura2.png";

export const BuscadorContext = createContext();

const BuscadorProvider = ({ children }) => {
  //const { categoryId } = useParams();
  const [productosBuscar, setProductosBuscar] = useState([]);
  const [encontrado, setEncontrado] = useState(productosBuscar);
  console.log(`productosBuscar`, productosBuscar);
  console.log(`encontrado`, encontrado);

  //------------------------------------------------------------

  useEffect(() => {
    //g setLoading(true);
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
      .catch((error) => console.log(error));
  }, []);

  /*   if (productosBuscar.length != 0) {
} */

  useEffect(() => {
    setEncontrado(productosBuscar);
  }, [productosBuscar]);
  //-------------------------------------------------------------

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
      {children}
    </BuscadorContext.Provider>
  );
};

export { BuscadorProvider };

//return <BuscadorContext.provider>{children}</BuscadorContext.provider>;
