import React, { useContext } from "react";

import ".././style.css";

import { BuscadorContext } from "../context/BuscadorContext";

function Buscador() {
  const { buscar } = useContext(BuscadorContext);

  return (
    <input
      className="inputBuscar"
      onChange={buscar}
      type="text"
      placeholder="Buscar!"
    />
  );
}
export default Buscador;
