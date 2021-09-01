import React, { useContext } from "react";

import ".././style.css";

import { BuscadorContext } from "../context/BuscadorContext";

function ResultadosBusqueda() {
  const { renderBusqueda } = useContext(BuscadorContext);

  return <>{renderBusqueda()}</>;
}

export default ResultadosBusqueda;
