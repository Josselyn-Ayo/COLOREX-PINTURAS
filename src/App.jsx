import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './App.css';

import Login from './pages/Login';
import Register from './pages/Register';
import Abaut from './pages/Abaut';
import Contactos from './pages/Contactos';
import Producto from './pages/Producto';
import Index from './pages/Index';
import AdminDashboard from './Administrador/AdminDashboard'
import Cajero from './pages/Cajero';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* RUTAS DE USUARIO */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/index" element={<Index />} />
        <Route path="/abaut" element={<Abaut />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/contactos" element={<Contactos />} />

        {/* RUTAS DE ADMINISTRADOR */}
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        {/*RUTAS DE CAJERO */}
        <Route path="/cajero" element={<Cajero />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

