import React, { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";

import Loading from "../components/Loading";

import { getFirestore } from "../firebase";

function ItemDetailContainer() {
  const { id } = useParams();

  const [detalle, setDetalle] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("productosDeIndumentaria");
    const elItem = itemCollection.doc(id);

    elItem
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No items");
          return;
        }

        setDetalle({ id: doc.id, ...doc.data() });
      })
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, [id]);

  const claseCss = () => {
    if (id != undefined) {
      return "containerDitail";
    } else {
      return "";
    }
  };

  return (
    <div className={claseCss()}>
      {loading && <Loading />}
      {detalle != undefined && <ItemDetail detalle={detalle} />}
    </div>
  );
}

export default ItemDetailContainer;
