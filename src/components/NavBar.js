import React from "react";

//import { estilo } from ".././estilos";

import ".././style.css";

import { Dropdown, NavDropdown } from "react-bootstrap";

import Carrito from "./Carrito";

import Logo from "./Logo";

import Buscador from "./Buscador";

import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="nav">
        <NavLink to="/" activeClassName="activeNavLink" className="logoNavLink">
          <Logo />
        </NavLink>

        <ul className="ul">
          <li>
            <NavLink
              to="/buscador"
              activeClassName="activeNavLink"
              className=""
            >
              <Buscador />
            </NavLink>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Toggle className="hover" className="dropdown">
                Categorias
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdownMenu">
                <NavLink
                  to="/category/remeras"
                  activeClassName="activeNavLink"
                  className=""
                  value="remeras"
                >
                  <Dropdown.Item
                    href="#/action-1"
                    className="dropdownItem"
                    value="remeras"
                  >
                    Remeras
                  </Dropdown.Item>
                </NavLink>

                <NavLink
                  to="/category/pantalones"
                  activeClassName="activeNavLink"
                  className=""
                  value="pantalones"
                >
                  <NavDropdown />
                  <Dropdown.Item href="#/action-2" className="dropdownItem">
                    Pantalones
                  </Dropdown.Item>
                </NavLink>

                <NavLink
                  to="/category/lenceria"
                  activeClassName="activeNavLink"
                  className=""
                  value="lenceria"
                >
                  <NavDropdown />
                  <Dropdown.Item href="#/action-3" className="dropdownItem">
                    Lenceria
                  </Dropdown.Item>
                </NavLink>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <NavLink
            to="/ofertas"
            activeClassName="activeNavLink"
            className="ofertas"
          >
            <li className="hover">Ofertas</li>
          </NavLink>

          <NavLink to="/carrito" activeClassName="activeNavLink" className="">
            <Carrito />
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

//<NavLink to={} activeClassName="" className="" ></NavLink>
