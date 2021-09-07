import { useState, useEffect } from "react";
import { createContext } from "react";
import { NavLink } from "react-router-dom";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    if (recuperarLoGuardadoEnLocalStorage() !== null) {
      setProductos(recuperarLoGuardadoEnLocalStorage());
    }
  }, []);

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

  function removeItem(p) {
    let menos1 = productos.map((i) => {
      if (i.detalle.id === p.detalle.id) {
        let itemMenos1 = { detalle: p.detalle, cantidad: p.cantidad - 1 };
        return itemMenos1;
      } else {
        return i;
      }
    });
    for (const i of menos1) {
      if (i.cantidad < 0) {
        menos1.splice(menos1.indexOf(i), 1);
      }
    }

    setProductos(menos1);
    actualizarGuardadoEnStorage(menos1);
  }

  function masUnItem(p) {
    let mas1 = productos.map((i) => {
      if (i.detalle.id === p.detalle.id) {
        let cantidadEnItem =
          p.cantidad >= p.detalle.stock
            ? p.detalle.stock
            : Number(p.cantidad) + 1;
        return { detalle: p.detalle, cantidad: cantidadEnItem };
      } else {
        return i;
      }
    });

    setProductos(mas1);
    actualizarGuardadoEnStorage(mas1);
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
        agregarProducto,
        mostrarProductos,
        carritoLength,
        productos,
        valorTotal,
        removeTodo,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
