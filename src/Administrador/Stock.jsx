import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dbFirebase } from "../firebase"; 
import '../css/Stock.css';

function Stock() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const productosCol = collection(dbFirebase, "productos"); 
        const productosSnapshot = await getDocs(productosCol);
        const listaProductos = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(listaProductos);
        setCargando(false);
      } catch (error) {
        console.error("Error al obtener productos:", error);
        setCargando(false);
      }
    };

    obtenerProductos();
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (productos.length === 0) return <p>No hay productos disponibles.</p>;

  return (
    <div className="stock-container">
      <h2 className="stock-title">Inventario de Productos</h2>
      <div className="stock-grid">
        {productos.map((producto) => (
          <div className="stock-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} className="stock-image" />
            <h3>{producto.nombre}</h3>
            <p><strong>Categoría:</strong> {producto.categoria}</p>
            <p><strong>Descripción:</strong> {producto.descripcion}</p>
            <p><strong>Precio:</strong> ${producto.precio}</p>
            <p><strong>Stock disponible:</strong> {producto.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stock;
