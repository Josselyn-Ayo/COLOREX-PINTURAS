import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { dbFirebase } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../css/gestion.css";

function GestionProductos() {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    precio: "",
    stock: "",
    imagen: "",
  });
  const [modoEdicion, setModoEdicion] = useState(false);
  const [idEditando, setIdEditando] = useState(null);
  const navigate = useNavigate();

  const productosRef = collection(dbFirebase, "productos");

  const cargarProductos = async () => {
    const snapshot = await getDocs(productosRef);
    const productosData = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setProductos(productosData);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modoEdicion) {
        const productoDoc = doc(dbFirebase, "productos", idEditando);
        await updateDoc(productoDoc, {
          ...form,
          precio: parseFloat(form.precio),
          stock: parseInt(form.stock),
        });
        setModoEdicion(false);
        setIdEditando(null);
      } else {
        await addDoc(productosRef, {
          ...form,
          precio: parseFloat(form.precio),
          stock: parseInt(form.stock),
        });
      }

      setForm({
        nombre: "",
        descripcion: "",
        categoria: "",
        precio: "",
        stock: "",
        imagen: "",
      });

      cargarProductos();
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  const editarProducto = (producto) => {
    setModoEdicion(true);
    setIdEditando(producto.id);
    setForm({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      categoria: producto.categoria,
      precio: producto.precio,
      stock: producto.stock,
      imagen: producto.imagen,
    });
  };

  const eliminarProducto = async (id) => {
    const confirm = window.confirm("¿Seguro que deseas eliminar este producto?");
    if (!confirm) return;

    try {
      await deleteDoc(doc(dbFirebase, "productos", id));
      cargarProductos();
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return (
    <div className="gestion-container">
      <button onClick={() => navigate("/cajero")} className="btn-regresar">⬅ Regresar</button>
      <h2>Gestión de Productos</h2>

      <form onSubmit={handleSubmit} className="formulario-producto">
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input type="text" name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
        <input type="text" name="categoria" placeholder="Categoría" value={form.categoria} onChange={handleChange} />
        <input type="number" name="precio" placeholder="Precio" value={form.precio} onChange={handleChange} required />
        <input type="number" name="stock" placeholder="Stock" value={form.stock} onChange={handleChange} required />
        <input type="text" name="imagen" placeholder="URL Imagen" value={form.imagen} onChange={handleChange} />
        <button type="submit">{modoEdicion ? "Actualizar" : "Agregar"}</button>
        {modoEdicion && (
          <button
            type="button"
            onClick={() => {
              setModoEdicion(false);
              setForm({
                nombre: "",
                descripcion: "",
                categoria: "",
                precio: "",
                stock: "",
                imagen: "",
              });
            }}
          >
            Cancelar
          </button>
        )}
      </form>

      <div className="tabla-productos">
        <h3>Inventario</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.nombre}</td>
                <td>{prod.descripcion}</td>
                <td>{prod.categoria}</td>
                <td>${prod.precio}</td>
                <td>{prod.stock}</td>
                <td>{prod.imagen && <img src={prod.imagen} alt={prod.nombre} width="60" />}</td>
                <td>
                  <button onClick={() => editarProducto(prod)}>Editar</button>
                  <button onClick={() => eliminarProducto(prod.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
            {productos.length === 0 && (
              <tr>
                <td colSpan="7">No hay productos registrados.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GestionProductos;
