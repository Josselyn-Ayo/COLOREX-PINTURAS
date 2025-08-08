import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dbFirebase } from '../firebase';
import '../css/ventas.css';

function Ventas() {
  const [totalVentas, setTotalVentas] = useState(0);
  const [ventasCajero, setVentasCajero] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const ventasCollection = collection(dbFirebase, "ventas");
        const ventasSnapshot = await getDocs(ventasCollection);

        let sumaTotal = 0;
        let sumaCajero = 0;

        ventasSnapshot.forEach((doc) => {
          const data = doc.data()
          if (data.productos) {
            const totalProductos = data.productos.reduce((subtotal, prod) => {
              return subtotal + (prod.total ?? (prod.cantidad || 0) * (prod.precio || 0));
            }, 0);
            sumaTotal += totalProductos;
            if (data.rol === "cajero") {
              sumaCajero += totalProductos;
            }
          }
        });

        setTotalVentas(sumaTotal);
        setVentasCajero(sumaCajero);
      } catch (error) {
        console.error("Error al cargar ventas: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVentas();
  }, []);

  return (
    <div className="ventas-container">
      <h2>Total de Ventas</h2>
      {loading ? (
        <p className="ventas-loading">Cargando datos...</p>
      ) : (
        <>
          <p className="ventas-total">
            Total General: ${totalVentas.toFixed(2)}
          </p>
          <p className="ventas-cajero">
            Total Ventas Cajero: ${ventasCajero.toFixed(2)}
          </p>
          <p className="ventas-info">
            Este es el total acumulado de ventas registradas (calculado desde productos)
          </p>
        </>
      )}
    </div>
  );
}

export default Ventas;