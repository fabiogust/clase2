import React from "react";

import { estilo } from ".././estilos";

import ".././style.css";

import { Dropdown, NavDropdown } from "react-bootstrap";

import Carrito from "./Carrito";

export default function NavBar() {
  return (
    <div>
      <nav style={estilo.nav}>
        <div style={estilo.divLogo}>
          <div style={estilo.logoArriba}>THE CLOSET</div>
          <div style={estilo.logoAbajo}>Indumentaria</div>
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
              <Dropdown.Toggle className="hover" style={estilo.dropdown}>
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
          <li className="hover">Ofertas</li>
          <Carrito />
        </ul>
      </nav>
    </div>
  );
}
