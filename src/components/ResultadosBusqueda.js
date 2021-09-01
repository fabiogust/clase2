import React, { useState, useContext } from "react";
//import { useParams } from "react-router-dom";
import ".././style.css";

import { BuscadorContext } from "../context/BuscadorContext";

function ResultadosBusqueda() {
  const { renderBusqueda } = useContext(BuscadorContext);

  return <>{() => renderBusqueda()}</>;
}

export default ResultadosBusqueda;

/* 
  const { categoryId } = useParams();
  const [encontrado, setEncontrado]= useState("");
  
  
    const buscar =(e)=>{
      let valor = e.target.value;
  
      const db = getFirestore();
      const itemCollection = db.collection("productosDeIndumentaria");
      let resuladoBusqueda = itemCollection.where("nombre","==",`${e.target.value}`);
  
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
  
    }


  return (
    <div>
      <h1>Aca van los resultados de la busqueda</h1>

      
      <div id="divGeneralItems">
        {productos.map((producto) => {
          return <ItemListContainer key={producto.id} producto={producto} />;
        })}
      </div>
   

    </div>
  ); */
