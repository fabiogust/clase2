import React, { useContext } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotFound from "./NotFound";

import NavBar from "./NavBar";

import ContainerItems from "./ContainerItems";

import ProductosEnCarrito from "./ProductosEnCarrito";

import ResultadosBusqueda from "./ResultadosBusqueda";

import Ofertas from "./Ofertas";

import ItemDetailContainer from "./ItemDetailContainer";

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

        <Route path="/buscador">
          <ResultadosBusqueda />
        </Route>

        <Route path="/category/:categoryId">
          <ContainerItems />
        </Route>

        <Route path="/carrito">
          <ProductosEnCarrito clase="prodEnCarritoDesdeRouter" />
        </Route>

        <Route path="/ofertas" component={Ofertas} />

        <Route path="/item/:id" component={ItemDetailContainer} />

        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;

//ContainerItems    ItemDetailContainer

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
