import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // Estado para lista de productos en el carrito
    const [carrito, setCarrito] = useState([]);

    // Estado para resumen: cantidad total y total precio
    const [carritoInfo, setCarritoInfo] = useState({ cantidad: 0, total: 0 });

    // Función para agregar producto al carrito
    const agregarAlCarrito = (producto) => {
        setCarrito((prev) => [...prev, producto]);

        setCarritoInfo((prev) => ({
            cantidad: prev.cantidad + 1,
            total: prev.total + producto.priceCurrent,
        }));
    };

    // Función para eliminar producto del carrito (por id)
    const eliminarDelCarrito = (id) => {
        setCarrito((prev) => {
            const index = prev.findIndex(p => p.id === id);
            if (index === -1) return prev;

            const productoEliminado = prev[index];

            const nuevoCarrito = [...prev];
            nuevoCarrito.splice(index, 1);

            // Actualiza carritoInfo
            setCarritoInfo((prevInfo) => ({
                cantidad: Math.max(prevInfo.cantidad - 1, 0),
                total: Math.max(prevInfo.total - productoEliminado.priceCurrent, 0),
            }));

            return nuevoCarrito;
        });
    };

    return (
        <CartContext.Provider value={{ carrito, carritoInfo, agregarAlCarrito, eliminarDelCarrito, setCarrito, setCarritoInfo }}>
            {children}
        </CartContext.Provider>
    );
};
