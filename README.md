# ¡ Bienvenido a The Closet !

¡Hola! The Closet es un proyecto de e-commerce creado en react.

# Base de datos

Este proyecto utiliza la base de datos de firestore.

## Productos seleccionados

El usuario puede seleccionar productos y no realizar la compra en ese momento. Los productos quedaran guardados en el navegador a la espera de que finalice la compra o los elimine.
También puede dejar algún producto en cantidad cero (antes de eliminar el producto) y finalizar la compra con otros productos, lo que le permitirá retomar la compra de ese producto a futuro.

## Advertencias del navegador

En el componente Footer el: target = "\_ blank" lo marca como un riesgo de seguridad. La idea es que el usuario pueda visitar desde el e-comerce los otros sitios relacionados con The Closet.

En el componente ProductosEnCarrito al utilizar el metodo filter y no el map, advierte que espera que se devulva un valor. En este caso siempre se va a devolver un valor para terminar la compra, porque por mas que existan productos en el carrito de compras si el valor de la suma de cantidad por precio es cero, el boton de terminar compra no aparece.
