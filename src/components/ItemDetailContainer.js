import React, { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";

import { NavLink, useParams } from "react-router-dom";

//import { useHistory } from "react-router-dom";

function ItemDetailContainer({ producto }) {
  const { id } = useParams();
  //console.log("id " + id);
  //const params = useParams();
  //console.log("params " + params);

  //const h = useHistory();
  //console.log(`h`, h);

  useEffect(() => {
    if (id == producto.id) {
      mostrarDetalle();
    }
    if (id == undefined) {
      cerrarDetalle();
    }
  }, [id]);

  //const [product, setProduct] = useState(producto);
  const [detalle, setDetalle] = useState("");

  //useEffect(() => {
  const mostrarDetalle = () => {
    const tareaDetail = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(<ItemDetail detalle={producto} onSalir={cerrarDetalle} />);
        reject("Error, en el detalle!");
      }, 300);
    });
    tareaDetail.then(
      (result) => setDetalle(result),
      (err) => console.log(err)
    );
  };
  //});

  const cerrarDetalle = () => {
    setDetalle("");
  };

  return (
    <>
      <NavLink to={`/item/${producto.id}`} activeClassName="" className="">
        <button className="margen" onClick={mostrarDetalle}>
          ver detalle
        </button>
      </NavLink>

      {detalle}
    </>
  );
}

export default ItemDetailContainer;
