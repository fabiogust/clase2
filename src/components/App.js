import React, { useState } from "react";

import Router from "./Router";

import Footer from "./Footer";

import { CartProvider } from "../context/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
        <Router />
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;

//<ContainerItems />
