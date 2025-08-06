import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { dbFirebase } from '../firebase';
import '../css/agregarVenta.css';

function AgregarVenta() {
  const [ventasRecientes, setVentasRecientes] = useState([]);
  const [form, setForm] = useState({
    cantidad: '',
    categoria: '',
    descripcion: '',
    nombre: '',
    precio: '',
    rol: 'admin',
  });
  const [mensaje, setMensaje] = useState('');

  const fetchVentasRecientes = async () => {
    try {
      const ventasCollection = collection(dbFirebase, 'ventas');
      const q = query(ventasCollection, orderBy('fecha', 'desc'), limit(5));
      const snapshot = await getDocs(q);

      const ventas = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setVentasRecientes(ventas);
    } catch (error) {
      console.error('Error cargando ventas recientes:', error);
    }
  };

  useEffect(() => {
    fetchVentasRecientes();
  }, []);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleAgregar = async (e) => {
    e.preventDefault();

    if (!form.nombre || !form.precio || !form.cantidad) {
      setMensaje('Por favor, completa los campos Nombre, Precio y Cantidad.');
      return;
    }
    if (isNaN(form.precio) || isNaN(form.cantidad)) {
      setMensaje('Precio y Cantidad deben ser números válidos.');
      return;
    }

    try {
      await addDoc(collection(dbFirebase, 'ventas'), {
        nombre: form.nombre,
        cantidad: Number(form.cantidad),
        categoria: form.categoria,
        descripcion: form.descripcion,
        precio: Number(form.precio),
        rol: form.rol,
        total: Number(form.precio) * Number(form.cantidad),
        fecha: new Date(),
      });

      setMensaje('Venta registrada correctamente');
      setForm({
        cantidad: '',
        categoria: '',
        descripcion: '',
        nombre: '',
        precio: '',
        rol: 'admin',
      });
      fetchVentasRecientes(); 
    } catch (error) {
      console.error('Error al agregar venta:', error);
      setMensaje('Hubo un error al registrar la venta.');
    }
  };

  const formatoFecha = (fecha) => {
    if (!fecha) return '-';
    if (fecha.seconds) { 
      return new Date(fecha.seconds * 1000).toLocaleString();
    } 
    if (fecha.toDate) { 
      return fecha.toDate().toLocaleString();
    }
    if (fecha instanceof Date) {
      return fecha.toLocaleString();
    }
    return '-';
  };

  return (
    <div className="agregar-venta-container">
      <h2>Agregar Venta</h2>
      <form onSubmit={handleAgregar} className="form-venta">
        <label>
          Nombre:
          <input
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Cantidad:
          <input
            name="cantidad"
            type="number"
            min="1"
            value={form.cantidad}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Precio:
          <input
            name="precio"
            type="number"
            min="0"
            step="0.01"
            value={form.precio}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Categoría:
          <input
            name="categoria"
            type="text"
            value={form.categoria}
            onChange={handleChange}
          />
        </label>
        <label>
          Descripción:
          <input
            name="descripcion"
            type="text"
            value={form.descripcion}
            onChange={handleChange}
          />
        </label>
        <label>
          Rol del vendedor:
          <select name="rol" value={form.rol} onChange={handleChange}>
            <option value="admin">Administrador</option>
            <option value="cajero">Cajero</option>
            <option value="usuario">Usuario</option>
          </select>
        </label>

        <button type="submit">Guardar Venta</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}

      <h3>Ventas Recientes</h3>
      <table className="tabla-ventas">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Rol</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {ventasRecientes.length === 0 ? (
            <tr>
              <td colSpan="6">No hay ventas registradas</td>
            </tr>
          ) : (
            ventasRecientes.map((venta) => (
              <tr key={venta.id}>
                <td>{venta.nombre || '-'}</td>
                <td>{venta.cantidad || 0}</td>
                <td>${Number(venta.precio || 0).toFixed(2)}</td>
                <td>${Number(venta.total || 0).toFixed(2)}</td>
                <td>{venta.rol || '-'}</td>
                <td>{formatoFecha(venta.fecha)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
export default AgregarVenta;


