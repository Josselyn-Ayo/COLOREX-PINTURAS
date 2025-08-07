import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {

  const eliminarDelCarrito = (id) => {
      setCarrito((carritoAnterior) =>
        carritoAnterior.filter((item) => item.id !== id)
      );
    };

  const [carrito, setCarrito] = useState([]);
  
  const valorTotal = carrito.reduce((total, item) => total + item.priceCurrent * item.quantity, 0);

  const agregarAlCarrito = (producto) => {
  setCarrito((carritoAnterior) => {
    const productoExistente = carritoAnterior.find((item) => item.id === producto.id);
    if (productoExistente) {
      return carritoAnterior.map((item) =>
        item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...carritoAnterior, { ...producto, quantity: 1 }];
    }
  });

};
    <header>
      <p>Total: ${valorTotal.toFixed(2)}</p>
    </header>

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, valorTotal, eliminarDelCarrito }}>
      {children}
    </CartContext.Provider>
    
  );
}

export const useCart = () => useContext(CartContext);

