import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-modal'; // ✅ Solo un import
import CarritoDashboard from './CarritoDashboart';

// ✅ Llamada a setAppElement solo una vez
Modal.setAppElement("#root");

function Header({ carritoInfo, carrito }) {
    const [isDashboardOpen, setDashboardOpen] = useState(false);

    const toggleDashboard = () => {
        setDashboardOpen(!isDashboardOpen);
    };

    const handleCheckout = () => {
        window.location.href = '/login';
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link to="/index">
                        <img className="colorex" src="../../public/images/logo/logo-colorex.png" alt="Colorex" />
                    </Link>
                </div>
                <div className="search-container">
                    <div className="search-bar">
                        <input type="text" placeholder="Buscar cualquier cosa..." className="search-input" />
                    </div>
                </div>
                <div className="top-bar">
                    <div className="icon-circle"><i className="fas fa-history"></i></div>
                    <div className="icon-circle"><i className="fas fa-heart"></i></div>
                    <div className="icon-circle"><i className="fas fa-user"></i></div>
                    <div className="login-info">
                        <span>BIENVENIDO</span>
                        <span>
                            <Link className="user" to="/login">INICIAR SESIÓN</Link> /
                            <Link className="user" to="/register">REGISTRARSE</Link>
                        </span>
                    </div>
                    <div className="cart" onClick={toggleDashboard}>
                        <div className="icon-circle">
                            <i className="fas fa-shopping-bag"></i>
                            <div className="badge">{carritoInfo.cantidad}</div>
                        </div>
                        <div className="cart-info">
                            <span>CARRITO</span>
                            <span>${carritoInfo.total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isDashboardOpen}
                onRequestClose={toggleDashboard}
                contentLabel="Carrito de Compras"
                className="modal"
                overlayClassName="overlay"
            >
                <CarritoDashboard
                    carrito={carrito}
                    total={carritoInfo.total}
                    onClose={toggleDashboard}
                    onCheckout={handleCheckout}
                />
            </Modal>
        </header>
    );
}

export default Header;
