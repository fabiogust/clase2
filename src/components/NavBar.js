import React, { useContext } from "react";

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
