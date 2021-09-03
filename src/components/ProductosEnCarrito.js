import React, { useContext, useState } from "react";

import { getFirestore } from "../firebase";

import { CartContext } from "../context/CartContext";

function ProductosEnCarrito({ clase }) {
  const { mostrarProductos, productos, valorTotal, carritoLength, removeTodo } =
    useContext(CartContext);

  const [orderCreatedId, setOrderCreatedId] = useState(null);

  const [confirmEmail, setConfirmEmail] = useState("");

  const [usuario, setUsuario] = useState({
    nombreCliente: "",
    telefonoCliente: "",
    emailCliente: "",
  });

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
      buyer: usuario,
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
      <h4>
        {usuario.nombreCliente} su orden de compra es: {orderCreatedId}
      </h4>
    );
  };

  const agregarUsuario = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const confirmarEmail = (e) => {
    setConfirmEmail(e.target.value);
  };
  const validarEmail = () => {
    if (confirmEmail == usuario.emailCliente) {
      return true;
    } else {
      return false;
    }
  };
  const habilitarBoton = () => {
    return !(
      usuario.nombreCliente !== "" &&
      usuario.telefonoCliente !== "" &&
      usuario.emailCliente !== "" &&
      validarEmail()
    );
  };

  return (
    <>
      <div className={clase}>{mostrarProductos()}</div>
      {valorTotal() != 0 && (
        <div className="datosDeCompra">
          <h4 className="tituloDeDatosDeCompra">Complete sus datos.</h4>
          <div className="divDeInput">
            <input
              className="inputDatos"
              name="nombreCliente"
              onChange={agregarUsuario}
              type="text"
              placeholder="Nombre"
            />
            <input
              className="inputDatos"
              name="telefonoCliente"
              onChange={agregarUsuario}
              type="tel"
              placeholder="Telefono"
            />
            <input
              className="inputDatos"
              name="emailCliente"
              onChange={agregarUsuario}
              type="email"
              placeholder="correo@correo.com"
            />
            <input
              className="inputDatos"
              onChange={confirmarEmail}
              type="email"
              placeholder="Repita su correo@correo.com"
            />
          </div>
          <div>
            <button
              className="botonTerminarCompra"
              disabled={habilitarBoton()}
              onClick={handleFinishPurchase}
            >
              Terminar compra
            </button>
          </div>
        </div>
      )}
      {orderCreatedId != null && compraTerminada()}
    </>
  );
}

export default ProductosEnCarrito;
