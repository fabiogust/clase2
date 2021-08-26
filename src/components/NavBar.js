import React, { useContext } from "react";

//import { estilo } from ".././estilos";

import ".././style.css";

import { Dropdown, NavDropdown } from "react-bootstrap";

import Carrito from "./Carrito";

import Logo from "./Logo";

import Buscador from "./Buscador";

import { NavLink } from "react-router-dom";

import ProductosEnCarrito from "./ProductosEnCarrito";

import { CartContext } from "../context/CartContext";

export default function NavBar() {
  const { carritoLength } = useContext(CartContext);

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

          <li className="liSubUl hover">
            Categorias
            <ul className="subUl ">
              <li className="subLi">
                <NavLink
                  to="/category/remeras"
                  activeClassName="activeNavLink"
                  className=""
                  value="remeras"
                >
                  Remeras
                </NavLink>
              </li>
              <li className="subLi">
                <NavLink
                  to="/category/pantalones"
                  activeClassName="activeNavLink"
                  className=""
                  value="pantalones"
                >
                  Pantalones
                </NavLink>
              </li>
              <li className="subLi">
                <NavLink
                  to="/category/lenceria"
                  activeClassName="activeNavLink"
                  className=""
                  value="lenceria"
                >
                  Lenceria
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="hover">
            <NavLink
              to="/ofertas"
              activeClassName="activeNavLink"
              className="ofertas"
            >
              Ofertas
            </NavLink>
          </li>

          <li className="liCarrito ulVistaRapida">
            <NavLink to="/carrito" activeClassName="activeNavLink" className="">
              <Carrito />
            </NavLink>
            <ul className="">
              <li className="liVistaRapida">
                {carritoLength() != 0 && <ProductosEnCarrito clase={""} />}
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

//<NavLink to={} activeClassName="" className="" ></NavLink>

/*
  <NavDropdown
              title="Categorias"
              id="basic-nav-dropdown"
              className="hover"
            >
              <NavDropdown.Item
                href=""
                className="dropdownItem"
                value="remeras"
              >
                <NavLink
                  to="/category/remeras"
                  activeClassName="activeNavLink"
                  className="dropdownItem"
                  value="remeras"
                >
                  Remeras
                </NavLink>
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="" className="dropdownItem">
                <NavLink
                  to="/category/pantalones"
                  activeClassName="activeNavLink"
                  className="dropdownItem"
                  value="pantalones"
                >
                  Pantalones
                </NavLink>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="" className="dropdownItem">
                <NavLink
                  to="/category/lenceria"
                  activeClassName="activeNavLink"
                  className="dropdownItem"
                  value="lenceria"
                >
                  Lenceria
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

---------------------------------------------------------------------

  <li>
            <NavDropdown
              title="Categorias"
              id="basic-nav-dropdown"
              className="hover"
            >
              <NavLink
                to="/category/remeras"
                activeClassName="activeNavLink"
                className="dropdownItem"
                value="remeras"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  className="dropdownItem"
                  value="remeras"
                >
                  Remeras
                </NavDropdown.Item>
              </NavLink>

              <NavDropdown.Divider />

              <NavLink
                to="/category/pantalones"
                activeClassName="activeNavLink"
                className="dropdownItem"
                value="pantalones"
              >
                <NavDropdown.Item href="#action/3.2" className="dropdownItem">
                  Pantalones
                </NavDropdown.Item>
              </NavLink>

              <NavDropdown.Divider />

              <NavLink
                to="/category/lenceria"
                activeClassName="activeNavLink"
                className="dropdownItem"
                value="lenceria"
              >
                <NavDropdown.Item href="#action/3.3" className="dropdownItem">
                  Lenceria
                </NavDropdown.Item>
              </NavLink>
            </NavDropdown>
          </li>

-----------------------------------------------------------------------------------------
  <li>
            -------------------------------------------------------------------------------
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
            ------------------------------------------------------------------ -
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

*/
