import React, { useContext } from "react";

import ".././style.css";

import { Dropdown, NavDropdown } from "react-bootstrap";

import Carrito from "./Carrito";

import Logo from "./Logo";

import Buscador from "./Buscador";

import { NavLink } from "react-router-dom";

import ProductosEnCarrito from "./ProductosEnCarrito";

import { CartContext } from "../context/CartContext";

import { useRouteMatch } from "react-router-dom";

export default function NavBar() {
  const { carritoLength } = useContext(CartContext);

  let match = useRouteMatch("/carrito");

  const ulVistaRapida = () => {
    if (match) {
      return "";
    } else {
      return "ulVistaRapida";
    }
  };

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
            <span className="spanCategorias">Categorias</span>
            <ul className="subUl ">
              <li className="subLi subLi1 hoverS">
                <NavLink
                  to="/category/remeras"
                  activeClassName="activeNavLink"
                  className=""
                  value="remeras"
                >
                  <span className="hover">Remeras</span>
                </NavLink>
              </li>
              <li className="subLi subLi2 hoverS">
                <NavLink
                  to="/category/pantalones"
                  activeClassName="activeNavLink"
                  className=""
                  value="pantalones"
                >
                  <span className="hover">Pantalones</span>
                </NavLink>
              </li>
              <li className="subLi subLi3 hoverS">
                <NavLink
                  to="/category/lenceria"
                  activeClassName="activeNavLink"
                  className=""
                  value="lenceria"
                >
                  <span className="hover">Lenceria</span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li className={`liCarrito ${ulVistaRapida()}`}>
            <ul className="ulCarrito">
              <NavLink
                to="/carrito"
                activeClassName="activeNavLink"
                className=""
              >
                <Carrito />
              </NavLink>
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
