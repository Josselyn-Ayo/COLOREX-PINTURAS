import React from 'react';

function CarritoDashboard({ carrito, total, onClose, onCheckout }) {
    return (
        <div className="carrito-dashboard">
            <h2>Detalles del Carrito</h2>
            {carrito.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul>
                        {carrito.map((producto, index) => (
                            <li key={index}>
                                {producto.title} - ${producto.priceCurrent}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${total.toFixed(2)}</h3>
                    <div className="opciones-pago">
                        <button onClick={() => onCheckout('tarjeta')}>Pagar con Tarjeta</button>
                        <button onClick={() => onCheckout('efectivo')}>Pagar en Efectivo</button>
                    </div>
                </div>
            )}
            <button onClick={onClose}>Cerrar</button>
        </div>
    );
}

export default CarritoDashboard;
