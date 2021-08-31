import React, { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";

import { NavLink, useParams } from "react-router-dom";

//import { useHistory } from "react-router-dom";
import { getFirestore } from "../firebase";

function ItemDetailContainer() {
  const { id } = useParams();

  const [detalle, setDetalle] = useState();

  useEffect(() => {
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
      .catch((error) => console.log(error));
  }, [id]);

  return <>{detalle != undefined && <ItemDetail detalle={detalle} />}</>;
}

export default ItemDetailContainer;

/*

    const db = getFirestore();
    const itemCollection = db.collection("productosDeIndumentaria");
  const elItem = itemCollection.doc(id)

    elItem
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("No items");
          return;
        }
      
       setDetalle({id : doc.id , ...doc.data()})
      })
      .catch((error) => console.log(error));
  }, [id]); 

*/
//-------------------------------------------------
/*
import React, { useState, useEffect } from "react";

import ItemDetail from "./ItemDetail";

import { NavLink, useParams } from "react-router-dom";

import { getFirestore } from "../firebase";

//import { useHistory } from "react-router-dom";

function ItemDetailContainer({ producto }) {
  const { id } = useParams();
  const idid = "C0wx5QRGfwggrllIyOX3";

  //const [itemSelec, setItemSelec] = useState();

  //const [detalle, setDetalle] = useState();

     useEffect(() => {
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
      .catch((error) => console.log(error));
  }, [id]);
 
  //const [product, setProduct] = useState(producto);

  const mostrarDetalle = () => {
    const db = getFirestore();
    const itemCollection = db.collection("productosDeIndumentaria");

    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No items");
        }
        setDetalle(
          querySnapshot.docs.map(
            (document) =>
              document.id == idid && { id: document.id, ...document.data() }
          )
        );
      })
      .catch((error) => console.log(error));

    itemCollection
       .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("No items");
        }
        //  setProductos(querySnapshot.docs.map((document) => document.data()));
        setDetalle(
          querySnapshot.docs.map(
            (document) =>
              document.id == producto.id && {
                id: document.id,
                ...document.data(),
              }
          )
        );
      })
      .catch((error) => console.log(error));

    return <ItemDetail detalle={detalle[0]} onSalir={cerrarDetalle} />;
    
  };

  const cerrarDetalle = () => {
    setDetalle("");
    //setItemSelec("");
  };

  return (
    <>
      <NavLink to={`/item/${producto.id}`} activeClassName="" className="">
        <button className="margen" onClick={mostrarDetalle}>
          ver detalle
        </button>
      </NavLink>

      {detalle}
      {console.log(`detalle`, detalle)}
    </>
  );
}

export default ItemDetailContainer;
*/

//-----------------------------------------------------------------------------

/*

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


*/
