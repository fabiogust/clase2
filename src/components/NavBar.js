import React from "react";

import { estilo } from ".././estilos";

export default function Menu() {
  return (
    <div style={estilo.divGeneral}>
      <nav style={estilo.nav}>
        <div style={estilo.divLogo}>
          <div style={estilo.logoArriba}>MEGA TIENDA</div>{" "}
          <div style={estilo.logoAbajo}>PEPE</div>
        </div>
        <ul style={estilo.ul}>
          <li>
            <input
              style={estilo.inputBuscar}
              type="text"
              placeholder="Buscar!"
            />
          </li>
          <li> Productos</li>
          <li>Ofertas</li>
          <li>
            <img src="../img/carrito2.svg" alt="Carrito" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
