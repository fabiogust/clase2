import React, { useState, useEffect } from "react";

import ".././style.css";

import ItemListContainer from "./ItemListContainer";

import { useParams } from "react-router-dom";

import { getFirestore } from "../firebase";

import ItemDetail from "./ItemDetail";

function ContainerItems() {
  // let [productos, setProductos] = useState([]);
  const { categoryId, id } = useParams();

  const [productos, setProductos] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState([]);

  const [resultado, setResultado] = useState([]);

  // const [item, setItem] = useState(null);
  const [itemsWidthHighPrice, setItemsWidthHighPrice] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("productosDeIndumentaria");
    // const currentItem = itemCollection.doc(itemId);
    // const highPrice = itemCollection.where("price", ">", 3000000);

    // Call to collection
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No items");
        }
        //  setProductos(querySnapshot.docs.map((document) => document.data()));
        setProductos(
          querySnapshot.docs.map((document) => ({
            id: document.id,
            ...document.data(),
          }))
        );
      })
      .catch((error) => console.log(error));
    // .finally(() => setLoading(false));

    /* highPrice
      .get()
      .then((querySnapshot) =>
        setItemsWidthHighPrice(
          querySnapshot.docs.map((document) => document.data())
        )
      )
      .catch((error) => console.log("error, error")); */

    // Call with filters
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

    /*   switch (categoryId) {
      case "lenceria":
        setResultado(categoriaActual);
        break;
      case "pantalones":
        setResultado(categoriaActual);
        break;
      case "remeras":
        setResultado(categoriaActual);
        break;
    } */
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

  console.log(`categoryId`, categoryId);
  console.log(`resultado`, resultado);
  console.log(`productos`, productos);
  console.log(`id`, id);

  return (
    <>
      {categoryId == undefined ? todos() : seleccion()}
      {detail()}
    </>
  );
}

export default ContainerItems;

/*

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
      }, 300);
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


*/
