import Login from './pages/Login';
import Register from './pages/Register';
import Abaut from './pages/Abaut';
import Contactos from './pages/Contactos';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './App.css'
import Producto from './pages/Producto';
import Index from './pages/Index';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/index" element={<Index />} />
        <Route path="/abaut" element={<Abaut />} />
        <Route path="/producto" element={<Producto />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
