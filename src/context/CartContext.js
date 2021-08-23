import { Children, useState, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

//export default CartContext;

const CartProvider = ({ children }) => {
  let prod = [];
  if (recuperarLoGuardadoEnLocalStorage() != null) {
    prod = recuperarLoGuardadoEnLocalStorage();
  }

  const [productos, setProductos] = useState(prod);

  console.log("productos", productos);

  const agregarProducto = (detalle, cantidad) => {
    console.log("productos1", productos);
    if (recuperarLoGuardadoEnLocalStorage() != null) {
      let prodf = recuperarLoGuardadoEnLocalStorage();
      setProductos(prodf);
      console.log("productosaaA", productos);
    }

    if (productos.length != 0) {
      console.log("productos2", productos);

      for (let iterator of productos) {
        console.log(
          "iterator.detalle.id",
          iterator.detalle.id + " | " + detalle.id
        );
        if (iterator.detalle.id === detalle.id) {
          productos[productos.indexOf(iterator)].cantidad =
            Number(iterator.cantidad) + Number(cantidad);
          setProductos(productos);
          actualizarGuardadoEnStorage(productos);
          console.log("productos3", productos);
          break;
        } else {
          nuevoItem(detalle, cantidad);
          console.log("productos4", productos);
        }
      }
    } else {
      nuevoItem(detalle, cantidad);
      console.log("productos5", productos);
    }
  };

  //------------funciones del context---------------------------------------------------

  const [c, setC] = useState(1);

  function removeItem(p) {
    // setC(p.cantidad);

    productos[productos.indexOf(p)].cantidad = Number(p.cantidad) - 1;
    setC(productos[productos.indexOf(p)].cantidad);
    setProductos(productos);
    actualizarGuardadoEnStorage(productos);

    if (productos[productos.indexOf(p)].cantidad < 1) {
      productos.splice(productos.indexOf(p), 1);
      setProductos(productos);
      actualizarGuardadoEnStorage(productos);
    }
  }

  function masUnItem(p) {
    productos[productos.indexOf(p)].cantidad =
      p.cantidad >= p.detalle.stock ? p.detalle.stock : Number(p.cantidad) + 1;

    setC(productos[productos.indexOf(p)].cantidad);
    setProductos(productos);
    actualizarGuardadoEnStorage(productos);
  }

  function removeTodo() {
    setProductos([]);
    localStorage.clear();
  }

  function nuevoItem(detalle, cantidad) {
    const nuevoProducto = [...productos, { detalle, cantidad: cantidad }];
    setProductos(nuevoProducto);
    actualizarGuardadoEnStorage(nuevoProducto);
    console.log("productos6", productos);
  }

  function recuperarLoGuardadoEnLocalStorage() {
    return JSON.parse(localStorage.getItem("guardadoEnLocalStorage"));
  }

  function actualizarGuardadoEnStorage(entrada) {
    localStorage.clear();
    localStorage.setItem("guardadoEnLocalStorage", JSON.stringify(entrada));
  }

  //------------------------------------------------------------------------
  const mostrarProductos = () => {
    return (
      <div>
        <div>
          {productos.map((p) => {
            console.log("hola hola");
            return (
              <div key={p.detalle.id}>
                producto: {p.detalle.nombre} | cantidad:{p.cantidad}{" "}
                <button onClick={() => removeItem(p)}> - </button>
                <button onClick={() => masUnItem(p)}> + </button>
              </div>
            );
          })}
        </div>
        {productos.length == 0 ? (
          sinProductos()
        ) : (
          <button onClick={removeTodo}>borrar todo</button>
        )}
      </div>
    );
  };
  //<button onClick={removeTodo}>borrar todo</button>
  function sinProductos() {
    return <h2>No tiene productos en el carrito</h2>;
  }

  return (
    <CartContext.Provider
      value={{
        agregarProducto: agregarProducto,
        mostrarProductos: mostrarProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
