import { useState } from "react";
import { createContext } from "react";
import { NavLink } from "react-router-dom";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  let prod = [];
  if (recuperarLoGuardadoEnLocalStorage() !== null) {
    prod = recuperarLoGuardadoEnLocalStorage();
  }

  const [productos, setProductos] = useState(prod);

  const carritoLength = () => {
    return (
      productos.length !== 0 && (
        <span className="carritoLength">
          {productos.reduce(
            (acumulador, iterator) => (acumulador += iterator.cantidad),
            0
          )}
        </span>
      )
    );
  };

  const valorTotal = () => {
    let valorTotalProductosEnCarrito = productos.reduce(
      (acumulador, iterador) =>
        acumulador + iterador.cantidad * iterador.detalle.precio,
      0
    );
    return valorTotalProductosEnCarrito;
  };

  const agregarProducto = (detalle, cantidad) => {
    if (recuperarLoGuardadoEnLocalStorage() !== null) {
      let prodf = recuperarLoGuardadoEnLocalStorage();
      setProductos(prodf);
    }

    if (productos.length !== 0) {
      for (let iterator of productos) {
        if (iterator.detalle.id === detalle.id) {
          productos[productos.indexOf(iterator)].cantidad =
            Number(iterator.cantidad) + Number(cantidad);
          if (
            productos[productos.indexOf(iterator)].cantidad >
            productos[productos.indexOf(iterator)].detalle.stock
          ) {
            productos[productos.indexOf(iterator)].cantidad =
              productos[productos.indexOf(iterator)].detalle.stock;
          }
          setProductos(productos);
          actualizarGuardadoEnStorage(productos);
          break;
        } else {
          nuevoItem(detalle, cantidad);
        }
      }
    } else {
      nuevoItem(detalle, cantidad);
    }
  };

  //funciones del context |Aclaracion al useState c lo utilizo solo para hacer render de la cantidad, es random porque lo usan todos los item ----
  const [c, setC] = useState("random");

  function removeItem(p) {
    productos[productos.indexOf(p)].cantidad = Number(p.cantidad) - 1;
    setProductos(productos);

    if (productos[productos.indexOf(p)].cantidad < 0) {
      productos.splice(productos.indexOf(p), 1);
      setProductos(productos);
      actualizarGuardadoEnStorage(productos);
    }
    setC(Math.random());
    actualizarGuardadoEnStorage(productos);
  }

  function masUnItem(p) {
    productos[productos.indexOf(p)].cantidad =
      p.cantidad >= p.detalle.stock ? p.detalle.stock : Number(p.cantidad) + 1;
    setProductos(productos);
    actualizarGuardadoEnStorage(productos);
    setC(Math.random());
  }

  function removeTodo() {
    let productoSinCantidad = productos.filter((producto) => {
      if (producto.cantidad === 0) {
        return producto;
      } else {
        return null;
      }
    });

    setProductos(productoSinCantidad);
    localStorage.clear();
    localStorage.setItem(
      "guardadoEnLocalStorage",
      JSON.stringify(productoSinCantidad)
    );
  }

  function nuevoItem(detalle, cantidad) {
    const nuevoProducto = [
      ...productos,
      { detalle, cantidad: Number(cantidad) },
    ];
    setProductos(nuevoProducto);
    actualizarGuardadoEnStorage(nuevoProducto);
  }

  function recuperarLoGuardadoEnLocalStorage() {
    return JSON.parse(localStorage.getItem("guardadoEnLocalStorage"));
  }

  function actualizarGuardadoEnStorage(entrada) {
    localStorage.clear();
    localStorage.setItem("guardadoEnLocalStorage", JSON.stringify(entrada));
  }

  const mostrarProductos = () => {
    return (
      <div className="divDeProductosEnCarrito">
        <div>
          {productos.map((p) => {
            return (
              <div className="itemEnCarrito" key={p.detalle.id}>
                <div className="divImgEnCarrito">
                  <img
                    src={p.detalle.imagen}
                    className="imgEnCarrito"
                    alt={p.detalle.nombre}
                  />
                </div>
                <div className="datoCarrito">
                  <div className="datoCarritoNombreProducto">
                    {p.detalle.nombre}
                  </div>
                  <div className="divBotonS-R">
                    <div>
                      {p.cantidad === 0 ? " " : " $" + p.detalle.precio}
                      {p.cantidad === 0 ? " " : " X " + p.cantidad + " = "}
                      {p.cantidad === 0
                        ? " "
                        : " $" + p.detalle.precio * p.cantidad}
                    </div>
                    <div>
                      <button
                        className="botonS-R menos"
                        onClick={() => removeItem(p)}
                      >
                        {p.cantidad === 0 ? `ELIMINAR ESTE PRODUCTO` : " - "}
                      </button>
                      <button
                        className="botonS-R mas"
                        onClick={() => masUnItem(p)}
                      >
                        +{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {productos.length === 0 ? (
          sinProductos()
        ) : (
          <div className="divTotalyBorrar">
            <div className="margen">{" Total: $" + valorTotal()}</div>
            <div>{validarBotonBorrarTodo()}</div>
          </div>
        )}
      </div>
    );
  };

  const botonDeBorrarTodo = () => {
    return (
      <button className=" margen botonBorrarTodo" onClick={removeTodo}>
        Borrar todo
      </button>
    );
  };

  const validarBotonBorrarTodo = () => {
    if (
      (JSON.parse(localStorage.getItem("guardadoEnLocalStorage")).length !==
        0 &&
        valorTotal() === 0) ||
      valorTotal() === undefined
    ) {
      return null;
    } else if (valorTotal() !== 0) {
      return botonDeBorrarTodo();
    }
  };

  function sinProductos() {
    return (
      <div className="carritoSinProductos">
        <h2 className="tituloCarritoSinProductos">
          No tiene productos en el carrito.
        </h2>
        <div>
          <NavLink
            to="/"
            activeClassName=""
            className="linkCarritoSinProductos"
          >
            <button className="botonCarritoSinProductos">
              Vea los productos disponibles
            </button>
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <CartContext.Provider
      value={{
        agregarProducto: agregarProducto,
        mostrarProductos: mostrarProductos,
        carritoLength: carritoLength,
        productos: productos,
        valorTotal: valorTotal,
        removeTodo: removeTodo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
