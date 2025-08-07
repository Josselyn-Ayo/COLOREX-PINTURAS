import { useCart } from "./context/CartContext"; // ajusta la ruta
import { useState } from "react";
import Footer from "./Footer";
import Main from "./Main";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Carrito() {
  const { carrito, eliminarDelCarrito } = useCart();
  const [metodoPago, setMetodoPago] = useState("");

  const total = carrito.reduce(
    (acc, item) => acc + item.priceCurrent * item.quantity,
    0
  );

  const handlePagar = () => {
    alert(`Pago realizado con ${metodoPago}. Total: $${total.toFixed(2)}`);
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
