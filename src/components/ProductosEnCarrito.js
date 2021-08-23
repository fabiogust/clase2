import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

function ProductosEnCarrito() {
  const { mostrarProductos } = useContext(CartContext);

  return <div>{mostrarProductos()}</div>;
}

export default ProductosEnCarrito;
