import React, { useContext, useState } from "react";

import { getFirestore } from "../firebase";

import { CartContext } from "../context/CartContext";

function ProductosEnCarrito({ clase }) {
  const { mostrarProductos, productos, valorTotal, carritoLength, removeTodo } =
    useContext(CartContext);

  const [orderCreatedId, setOrderCreatedId] = useState(null);
  const [nombreCliente, setNombreCliente] = useState("");
  const [telefonoCliente, setTelefonoCliente] = useState("");
  const [emailCliente, setEmailCliente] = useState("");

  const handleFinishPurchase = () => {
    const newItems = productos.map(({ detalle, cantidad }) => ({
      item: {
        id: detalle.id,
        title: detalle.nombre,
        price: detalle.precio,
      },
      cantidad: cantidad,
    }));

    console.log("newItems", newItems);
    const newOrder = {
      buyer: {
        name: nombreCliente,
        phone: telefonoCliente,
        email: emailCliente,
      },
      items: newItems,
      valorTotal: valorTotal(),
    };
    console.log(`newOrderfff`, newOrder);
    const db = getFirestore();
    const orders = db.collection("orders");
    const batch = db.batch();

    orders
      .add(newOrder)
      .then((response) => {
        console.log("response", response);
        productos.forEach(({ detalle, cantidad }) => {
          const docRef = db
            .collection("productosDeIndumentaria")
            .doc(detalle.id);
          batch.update(docRef, { stock: detalle.stock - cantidad });
        });
        batch.commit();
        setOrderCreatedId(response.id);
      })
      .catch((error) => console.log(error));

    removeTodo();
  };
  //-------------------------------------------------------------------------------------------
  console.log(`orderCreatedId3333`, orderCreatedId);

  const compraTerminada = () => {
    return (
      <h1>
        {nombreCliente} la orden es: {orderCreatedId}{" "}
      </h1>
    );
  };

  return (
    <>
      <div className={clase}>{mostrarProductos()}</div>
      {valorTotal() != 0 && (
        <>
          <div>
            <input
              id="nombreCliente"
              onChange={(e) => setNombreCliente(e.target.value)}
              type="text"
              placeholder="Nombre"
            />
            <input
              id="telefonoCliente"
              onChange={(e) => setTelefonoCliente(e.target.value)}
              type="tel"
              placeholder="Telefono"
            />
            <input
              id="emailCliente"
              onChange={(e) => setEmailCliente(e.target.value)}
              type="email"
              placeholder="Ej@email.com"
            />
          </div>
          <button onClick={handleFinishPurchase}>Terminar compra</button>
        </>
      )}
      {orderCreatedId != null && compraTerminada()}
    </>
  );
}

export default ProductosEnCarrito;
