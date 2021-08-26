import React, { useContext } from "react";

import { CartContext } from "../context/CartContext";

function ProductosEnCarrito({ clase }) {
  const { mostrarProductos } = useContext(CartContext);

  return <div className={clase}>{mostrarProductos()}</div>;
}

export default ProductosEnCarrito;
