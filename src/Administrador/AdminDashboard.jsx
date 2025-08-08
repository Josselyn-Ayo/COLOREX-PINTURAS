import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import '../css/adminDashboard.css';
import PerfilAdmin from "./PerfilAdmin";
import Ventas from "./Ventas"; 
import Reportes from "./Reportes";  
import AgregarVenta from "./AgregarVenta";
import Stock from "./Stock";

function AdminDashboard() {
  const [vista, setVista] = useState("inicio");
  const navigate = useNavigate(); 

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login'); 
  };

  const renderContenido = () => {
    switch (vista) {
      case "perfil":
        return <PerfilAdmin />;
      case "ventas":
        return <Ventas />;     
      case "reportes":
        return <Reportes />;   
      case "agregarVenta":
        return <AgregarVenta />;
      case "Stock":
        return <Stock />;
      case "inicio":
      default:
        return (
          <>
            <h1>Bienvenido, Administrador</h1>
            <p>Controla las ventas, productos y usuarios desde aquí.</p>

            <div className="admin-buttons">
              <button className="btn-primary" onClick={() => setVista("agregarVenta")}>Agregar Venta</button>
              <button className="btn-secondary" onClick={() => setVista("ventas")}>Ver Total Ventas</button>
              <button className="btn-secondary" onClick={() => setVista("reportes")}>Ver Reportes</button>
              <button className="btn-secondary" onClick={() => setVista("Stock")}>Ver Stock</button>
            </div>
          </>
        );
    }
  };

  return (
    <div className="admin-wrapper" style={{ display: 'flex' }}>
      <aside className="admin-sidebar">
        <h2>Admin Panel</h2>
        <nav>
          <ul>
            <li><button onClick={() => setVista("perfil")}>Perfil</button></li>
            <li><button onClick={() => setVista("ventas")}>Total Ventas</button></li>
            <li><button onClick={() => setVista("reportes")}>Reportes</button></li>
            <li><button onClick={() => setVista("agregarVenta")}>Agregar Venta</button></li>
            <li><button onClick={() => setVista("Stock")}>Ver Stock</button></li>
            <li><button onClick={handleLogout}>Cerrar sesión</button></li>
          </ul>
        </nav>
      </aside>

      <main className="admin-main">
        {renderContenido()}
      </main>
    </div>
  );
}

export default AdminDashboard;
