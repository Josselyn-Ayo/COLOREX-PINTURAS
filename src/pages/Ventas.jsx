import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { dbFirebase } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../css/ventaCajero.css";

function Ventas() {
  const [productos, setProductos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState("");
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    cargarProductos();
    cargarClientes();
  }, []);

  const cargarProductos = async () => {
    const snapshot = await getDocs(collection(dbFirebase, "productos"));
    const lista = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .filter((p) => p.stock > 0);
    setProductos(lista);
  };

  const cargarClientes = async () => {
    const snapshot = await getDocs(collection(dbFirebase, "users"));
    const lista = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setClientes(lista);
  };

  useEffect(() => {
    const totalActual = carrito.reduce(
      (acc, prod) => acc + prod.precio * prod.cantidad,
      0
    );
    setTotal(totalActual);
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);
    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const cambiarCantidad = (id, cantidad) => {
    setCarrito(
      carrito.map((item) =>
        item.id === id
          ? { ...item, cantidad: parseInt(cantidad) || 1 }
          : item
      )
    );
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const realizarVenta = async () => {
    if (!clienteSeleccionado || carrito.length === 0) {
      alert("Selecciona un cliente y al menos un producto");
      return;
    }

    try {
      for (const item of carrito) {
        const productoRef = doc(dbFirebase, "productos", item.id);
        const productoSnap = await getDoc(productoRef);
        const productoData = productoSnap.data();

        if (productoData.stock < item.cantidad) {
          alert(`Stock insuficiente para: ${item.nombre}`);
          return;
        }
      }

      const venta = {
        clienteId: clienteSeleccionado,
        productos: carrito,
        total,
        fecha: new Date().toISOString(),
      };

      await addDoc(collection(dbFirebase, "ventas"), venta);

      for (const item of carrito) {
        const productoRef = doc(dbFirebase, "productos", item.id);
        const productoSnap = await getDoc(productoRef);
        const productoData = productoSnap.data();
        const nuevoStock = productoData.stock - item.cantidad;

        await updateDoc(productoRef, { stock: nuevoStock });
      }

      alert("Venta registrada y stock actualizado");
      setCarrito([]);
      setClienteSeleccionado("");
      cargarProductos();
    } catch (error) {
      console.error("Error al registrar venta:", error);
      alert("Ocurrió un error al procesar la venta");
    }
  };

  return (
    <div className="ventas-container">
      <button onClick={() => navigate("/cajero")} className="btn-regresar">⬅ Regresar</button>
      <h2>Realizar Venta</h2>

      <div className="ventas-seccion">
        <label>Seleccionar cliente:</label>
        <select
          value={clienteSeleccionado}
          onChange={(e) => setClienteSeleccionado(e.target.value)}
        >
          <option value="">-- Selecciona --</option>
          {clientes.map((cliente) => (
            <option key={cliente.id} value={cliente.id}>
              {cliente.nombre} {cliente.apellido} - {cliente.email}
            </option>
          ))}
        </select>
      </div>

      <div className="ventas-seccion">
        <h3>Productos disponibles</h3>
        <div className="productos-grid">
          {productos.map((prod) => (
            <div key={prod.id} className="producto-card">
              <h4>{prod.nombre}</h4>
              <p>${prod.precio}</p>
              <button onClick={() => agregarAlCarrito(prod)}>Agregar</button>
            </div>
          ))}
        </div>
      </div>

      <div className="ventas-seccion">
        <h3>Carrito</h3>
        {carrito.length === 0 && <p>No hay productos en el carrito</p>}
        {carrito.map((item) => (
          <div key={item.id} className="item-carrito">
            <span>{item.nombre}</span>
            <input
              type="number"
              min="1"
              value={item.cantidad}
              onChange={(e) => cambiarCantidad(item.id, e.target.value)}
            />
            <span>${(item.precio * item.cantidad).toFixed(2)}</span>
            <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
          </div>
        ))}
        {carrito.length > 0 && (
          <>
            <h4>Total: ${total.toFixed(2)}</h4>
            <button onClick={realizarVenta}>Confirmar Venta</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Ventas;
