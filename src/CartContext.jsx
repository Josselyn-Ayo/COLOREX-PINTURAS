import React, { createContext, useState } from 'react';

// Crea el contexto del carrito
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    // Estado para los productos en el carrito
    const [carrito, setCarrito] = useState([]);

    // Estado para el resumen del carrito
    const [carritoInfo, setCarritoInfo] = useState({ cantidad: 0, total: 0 });

    // Función para agregar un producto
    const agregarAlCarrito = (producto) => {
        setCarrito(prev => [...prev, producto]);
        setCarritoInfo(prev => ({
            cantidad: prev.cantidad + 1,
            total: prev.total + producto.priceCurrent,
        }));
    };

    // Función para eliminar un producto por su id
    const eliminarDelCarrito = (id) => {
        setCarrito(prev => {
            const index = prev.findIndex(p => p.id === id);
            if (index === -1) return prev;

            const productoEliminado = prev[index];
            const nuevoCarrito = [...prev];
            nuevoCarrito.splice(index, 1);

            // Actualiza carritoInfo
            setCarritoInfo(prevInfo => ({
                cantidad: Math.max(prevInfo.cantidad - 1, 0),
                total: Math.max(prevInfo.total - productoEliminado.priceCurrent, 0),
            }));

            return nuevoCarrito;
        });
    };

    return (
        <CartContext.Provider
            value={{
                carrito,
                carritoInfo,
                agregarAlCarrito,
                eliminarDelCarrito,
                setCarrito,
                setCarritoInfo
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

