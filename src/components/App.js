import React, { useState } from "react";

import Router from "./Router";

import Footer from "./Footer";

import { CartProvider } from "../context/CartContext";

import { BuscadorProvider } from "../context/BuscadorContext";

function App() {
  return (
    <div>
      <BuscadorProvider>
        <CartProvider>
          <Router />
        </CartProvider>
      </BuscadorProvider>
      <Footer />
    </div>
  );
}

export default App;

//<ContainerItems />
