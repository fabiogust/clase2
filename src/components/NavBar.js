import React from "react";

import { estilo } from ".././estilos";

import ".././style.css";

import carrito from "../img/carrito2.svg";

import { Dropdown, NavDropdown } from "react-bootstrap";

export default function Menu() {
  return (
    <div style={estilo.divGeneral}>
      <nav style={estilo.nav}>
        <div style={estilo.divLogo}>
          <div style={estilo.logoArriba}>MEGA TIENDA</div>
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
          <li>
            <Dropdown>
              <Dropdown.Toggle style={estilo.dropdown}>
                Productos
              </Dropdown.Toggle>

              <Dropdown.Menu style={estilo.dropdownMenu}>
                <Dropdown.Item href="#/action-1" style={estilo.dropdownItem}>
                  item1
                </Dropdown.Item>
                <NavDropdown />
                <Dropdown.Item href="#/action-2" style={estilo.dropdownItem}>
                  item2
                </Dropdown.Item>
                <NavDropdown />
                <Dropdown.Item href="#/action-3" style={estilo.dropdownItem}>
                  item3
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>Ofertas</li>
          <li>
            <img src={carrito} style={estilo.carrito} alt="Carrito" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
