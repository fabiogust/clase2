import React, { useContext } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotFound from "./NotFound";

import NavBar from "./NavBar";

import ContainerItems from "./ContainerItems";

import ProductosEnCarrito from "./ProductosEnCarrito";

import ResultadosBusqueda from "./ResultadosBusqueda";

import Ofertas from "./Ofertas";

//import { CartContext } from "../context/CartContext";
//const contextoCarrito = useContext(CartContext);

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ContainerItems />
        </Route>

        <Route path="/buscador" component={ResultadosBusqueda} />

        <Route path="/category/:categoryId">
          <ContainerItems />
        </Route>

        <Route path="/carrito" component={ProductosEnCarrito} />

        <Route path="/ofertas" component={Ofertas} />

        <Route path="/item/:id" component={ContainerItems} />

        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;

//  /:categoryId

/* 
function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ContainerItems} />
        <Route path="/buscador" component={Buscador} />
        <Route path="/category/:categoryId" component={ContainerItems} />
        <Route path="/carrito" component={Carrito} />
        <Route path="/item/:id" component={ContainerItems} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
} 
*/

//var pathname = window.location.pathname;
