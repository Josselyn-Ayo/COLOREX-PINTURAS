import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/admin.css";
import GestionProductos from "./GestionProductos";
import Ventas from "./Ventas";
import HistorialVentas from "./HistorialVentas";
import PerfilCajero from "./PerfilCajero";

function Cajero() {
  const [vista, setVista] = useState("inicio");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const renderContenido = () => {
    switch (vista) {
      case "productos":
        return <GestionProductos />;
      case "venta":
        return <Ventas />;
      case "historial":
        return <HistorialVentas />;
      case "perfil":
        return <PerfilCajero />;
      case "inicio":
      default:
        return (
          <>
            <h2>Bienvenido, Cajero</h2>
            <p>Selecciona una opción desde el menú lateral.</p>
          </>
        );
    }
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-sidebar">
        <h2>Cajero</h2>
        <ul>
          <li>
            <button
              className={vista === "productos" ? "activo" : ""}
              onClick={() => setVista("productos")}
            >
              Gestionar Productos
            </button>
          </li>
          <li>
            <button
              className={vista === "venta" ? "activo" : ""}
              onClick={() => setVista("venta")}
            >
              Realizar Ventas
            </button>
          </li>
          <li>
            <button
              className={vista === "historial" ? "activo" : ""}
              onClick={() => setVista("historial")}
            >
              Historial de Ventas
            </button>
          </li>
          <li>
            <button
              className={vista === "perfil" ? "activo" : ""}
              onClick={() => setVista("perfil")}
            >
              Actualizar Perfil
            </button>
          </li>
          <li>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </li>
        </ul>
      </div>

      <div className="admin-main">
        {renderContenido()}
      </div>
    </div>
  );
}

export default Cajero;

