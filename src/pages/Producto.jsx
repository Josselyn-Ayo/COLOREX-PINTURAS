import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import BannerProduct from '../component/componentes_Productos/Banner';
import Destacados from '../component/componentes_Productos/Destacados';
import Categorias from '../component/componentes_Productos/Categorias';
import Productos from '../component/componentes_Productos/Productos';
import Main from '../component/Main';
import '../css/productos.css';

function Producto() {
    const [carrito, setCarrito] = useState([]);
    const [carritoInfo, setCarritoInfo] = useState({ cantidad: 0, total: 0 });

    return (
        <>
            <BannerProduct />
            <Header carrito={carrito} carritoInfo={carritoInfo} />
            <Main />
            <Destacados />
            <Categorias />
            <Productos setCarrito={setCarrito} setCarritoInfo={setCarritoInfo} />
            <Footer />
        </>
    );
}

export default Producto;
