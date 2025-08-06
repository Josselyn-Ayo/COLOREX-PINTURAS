import React, { useState } from 'react';

function Productos({ setCarritoInfo, setCarrito }) {
    const [carrito, setCarritoLocal] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarritoLocal((prevCarrito) => {
            const updatedCarrito = [...prevCarrito, producto];
            actualizarCarritoInfo(updatedCarrito);
            return updatedCarrito;
        });
    };

    const actualizarCarritoInfo = (carritoActualizado) => {
        const total = carritoActualizado.reduce((acc, item) => acc + item.priceCurrent, 0);
        setCarritoInfo({ cantidad: carritoActualizado.length, total });
        setCarrito(carritoActualizado);
    };

    return (
        <div className="products-display-grid">
            {productos.map((producto) => (
                <ProductoCard 
                    key={producto.id} 
                    {...producto} 
                    agregarAlCarrito={agregarAlCarrito} 
                />
            ))}
            <Pagination />
        </div>
    );
}

function ProductoCard({ id, title, image, priceCurrent, priceOriginal, discount, agregarAlCarrito }) {
    return (
        <div className="product-display-card">
            <div className="product-display-title">{title}</div>
            <div className="product-display-image"><img src={image} alt={title} /></div>
            <div className="product-display-price">
                <span className="price-current">${priceCurrent}</span>
                {priceOriginal && <span className="price-original">${priceOriginal}</span>}
                {discount && <span className="price-discount-badge">{discount}% OFF</span>}
            </div>
            <button
                className="boton-agregar"
                onClick={() => agregarAlCarrito({ id, title, image, priceCurrent, priceOriginal, discount })}
            >
                Agregar al Carrito
            </button>

        </div>
    );
}

const productos = [
    { id: 1, title: "Masilla MUSTANG 6032", image: "/images/products/product_1.png", priceCurrent: 129, priceOriginal: 159, discount: 15 },
    { id: 2, title: "Pintura Convertone Wesco", image: "/images/products/product_2.png", priceCurrent: 30, priceOriginal: 50, discount: 15 },
    { id: 3, title: "Esmalte Sintetico", image: "/images/products/product_3.png", priceCurrent: 100, priceOriginal: 159, discount: 15 },
    { id: 4, title: "pintura Intervinil cubriente Pintuco", image: "/images/products/product_4.png", priceCurrent: 12, priceOriginal: 20, discount: 15 }, 
    { id: 5, title: "Dura-Life", image: "/images/products/product_5.png", priceCurrent: 29, priceOriginal: 50, discount: 15 },
    { id: 6, title: "DRY FALL NX", image: "/images/products/product_6.png", priceCurrent: 19, priceOriginal: 30, discount: 15 },
    { id: 7, title: "PPG - Thinner 2106 Cubeta", image: "/images/products/product_7.png", priceCurrent: 12, priceOriginal: 30, discount: 15 },
    { id: 8, title: "AL - 10 NX", image: "/images/products/product_8.png", priceCurrent: 40, priceOriginal: 159, discount: 15 },
    { id: 9, title: "Lavamani 500 ml", image: "/images/products/product_9.png", priceCurrent: 39, priceOriginal: 159, discount: 15 },
];

function Pagination() {
    return (
        <div className="pagination">
            <button className="page active">1</button>
            <button className="page">2</button>
            <button className="page">3</button>
            <button className="page">4</button>
            <span className="dots">...</span>
            <button className="page">20</button>
            <button className="page">Próximo</button>
        </div>
    );
}

export default Productos;
