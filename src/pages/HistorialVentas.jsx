import { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { dbFirebase } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../css/historias.css";

function HistorialVentas() {
  const [ventas, setVentas] = useState([]);
  const [clientes, setClientes] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const cargarVentasYClientes = async () => {
      try {

        const ventasSnapshot = await getDocs(collection(dbFirebase, "ventas"));
        const listaVentas = ventasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        setVentas(listaVentas);

       
        const clienteIds = [...new Set(listaVentas.map(v => v.clienteId))];

        const clientesMap = {};
        for (const id of clienteIds) {
          if (!id) continue; 
          const clienteDoc = await getDoc(doc(dbFirebase, "clientes", id));
          if (clienteDoc.exists()) {
            clientesMap[id] = clienteDoc.data().nombre || "Sin nombre";
          } else {
            clientesMap[id] = "Cliente no encontrado";
          }
        }

        setClientes(clientesMap);
      } catch (error) {
        console.error("Error cargando ventas o clientes:", error);
      }
    };

    cargarVentasYClientes();
  }, []);

  return (
    <div className="ventas-container">
      <button onClick={() => navigate(-1)} className="btn-regresar">⬅ Regresar</button>
      <h2>Historial de Ventas</h2>

      {ventas.length === 0 ? (
        <p>No hay ventas registradas</p>
      ) : (
        ventas.map((venta) => (
          <div
            key={venta.id}
            className="item-carrito"
            style={{ flexDirection: "column", alignItems: "flex-start" }}
          >
            <p><strong>Cliente:</strong> {clientes[venta.clienteId] || venta.clienteId || "Desconocido"}</p>
            <p><strong>Fecha:</strong> {venta.fecha ? new Date(venta.fecha.seconds ? venta.fecha.seconds * 1000 : venta.fecha).toLocaleString() : "Sin fecha"}</p>
            <p><strong>Total:</strong> ${venta.total ?? "0.00"}</p>
            <p><strong>Productos:</strong></p>
            <ul>
              {Array.isArray(venta.productos) && venta.productos.length > 0 ? (
                venta.productos.map((prod, i) => (
                  <li key={i}>
                    {prod.nombre} x{prod.cantidad} → ${prod.precio * prod.cantidad}
                  </li>
                ))
              ) : (
                <li>No hay productos registrados</li>
              )}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default HistorialVentas;


