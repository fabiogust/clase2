import React, { useState, useEffect } from "react";

import ".././style.css";

import ItemListContainer from "./ItemListContainer";

import { useParams } from "react-router-dom";

import { getFirestore } from "../firebase";

import ItemDetail from "./ItemDetail";

import Loading from "./Loading";

function ContainerItems() {
  const { categoryId, id } = useParams();
  const [productos, setProductos] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState([]);
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

        setProductos(
          querySnapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }))
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productosDeIndumentaria");
    const collectionPorCategoria = itemCollection.where(
      "categoryNane",
      "==",
      `${categoryId}`
    );

    collectionPorCategoria
      .get()
      .then((querySnapshot) =>
        setCategoriaActual(
          querySnapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }))
        )
      )
      .catch((err) => console.log("err", err));
  }, [categoryId]);

  function todos() {
    return (
      <div id="divGeneralItems">
        {productos.map((producto) => {
          return <ItemListContainer key={producto.id} producto={producto} />;
        })}
      </div>
    );
  }
  function seleccion() {
    return (
      <div id="divGeneralItems">
        {categoriaActual.map((producto) => {
          return <ItemListContainer key={producto.id} producto={producto} />;
        })}
      </div>
    );
  }

  function detail() {
    <div id="divGeneralItems">
      return <ItemDetail />;
    </div>;
  }

  return (
    <>
      {loading && <Loading />}
      {categoryId == undefined ? todos() : seleccion()}
      {detail()}
    </>
  );
}

export default ContainerItems;
