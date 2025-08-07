import { useCart } from "./context/CartContext";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Main from "./Main";
import { getAuth } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { dbFirebase } from "../firebase";
import { useNavigate } from "react-router-dom";

function Carrito() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();
  const { carrito, eliminarDelCarrito, vaciarCarrito, valorTotal } = useCart();
  const [metodoPago, setMetodoPago] = useState("");

  const total = carrito.reduce(
    (acc, item) => acc + item.priceCurrent * item.quantity,
    0
  );

  useEffect(() => {
    if (!user) {
      alert("Debes iniciar sesión para realizar el pago.");
      navigate("/login");
    }
  }, [user, navigate]);

  const handlePagar = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("Debes iniciar sesión para completar el pago.");
      navigate("/login");
      return;
    }

    const ventaData = {
      clienteId: user.uid,
      total: total,
      metodoPago: metodoPago,
      fecha: serverTimestamp(),
      productos: carrito.map((item) => ({
        nombre: item.title,
        precio: item.priceCurrent,
        cantidad: item.quantity,
      })),
    };

    try {
      await addDoc(collection(dbFirebase, "ventas"), ventaData);
      vaciarCarrito(); // ✅ Esto ahora sí funcionará
      alert(`Pago realizado con ${metodoPago}. Total: $${total.toFixed(2)}`);
      navigate("/login");
    } catch (error) {
      console.error("Error al registrar venta en Firestore:", error);
      alert("Hubo un error al registrar la venta. Inténtalo de nuevo.");
    }
  };

  return (
    <>
      <Main />

      <div className="carrito-container">
        <h2>Carrito de Compras</h2>

        {carrito.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <>
            <ul className="carrito-lista">
              {carrito.map((item, index) => (
                <li key={index} className="carrito-item">
                  {item.title} - ${item.priceCurrent} x {item.quantity}
                  <button
                    className="btn-eliminar"
                    onClick={() => eliminarDelCarrito(item.id)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="carrito-total">Total a pagar: ${total.toFixed(2)}</h3>

            <div className="metodo-pago">
              <label htmlFor="metodoPago">Selecciona el método de pago:</label>
              <select
                id="metodoPago"
                value={metodoPago}
                onChange={(e) => setMetodoPago(e.target.value)}
              >
                <option value="">-- Selecciona --</option>
                <option value="efectivo">Efectivo</option>
                <option value="tarjeta">Tarjeta de crédito</option>
                <option value="transferencia">Transferencia bancaria</option>
              </select>
            </div>

            {metodoPago && (
              <p className="metodo-seleccionado">
                Método seleccionado: {metodoPago}
              </p>
            )}

            <button
              onClick={handlePagar}
              disabled={!metodoPago}
              className="btn-pagar"
            >
              Pagar
            </button>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Carrito;
