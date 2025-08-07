import { useEffect, useState, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbFirebase } from "../firebase";
import "../css/reportes.css";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Reportes() {
  const [ventas, setVentas] = useState([]);
  const reporteRef = useRef(); 

  useEffect(() => {
    const obtenerVentas = async () => {
      try {
        const ventasSnapshot = await getDocs(collection(dbFirebase, "ventas"));
        const ventasList = ventasSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setVentas(ventasList);
      } catch (error) {
        console.error("Error al obtener ventas:", error);
      }
    };

    obtenerVentas();
  }, []);

  const generarPDF = () => {
    const input = reporteRef.current;

    html2canvas(input, { 
      scale: 2,
      logging: false,
      useCORS: true
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth() - 20; 
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 10, 10, pdfWidth, pdfHeight);
      pdf.save("reporte_ventas.pdf");
    });
  };

  const totalGeneral = ventas.reduce((total, venta) => {
    if (venta.productos) {
      return total + venta.productos.reduce((subtotal, prod) => {
        return subtotal + (prod.total ?? (prod.cantidad || 0) * (prod.precio || 0));
      }, 0);
    }
    return total;
  }, 0);

  return (
    <div className="reportes-container">
      <h1>📊 Reporte de Ventas</h1>

      <button 
        onClick={generarPDF} 
        className="pdf-button"
        style={{ marginBottom: "15px" }}
      >
        📄 Descargar PDF
      </button>

      <div ref={reporteRef} className="reporte-content">
        <h2>Reporte de Ventas</h2>
        <p>Fecha de generación: {new Date().toLocaleDateString()}</p>
        
        <table className="ventas-table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {ventas.length > 0 ? (
              ventas.flatMap((venta) =>
                venta.productos?.map((prod, index) => (
                  <tr key={`${venta.id}-${index}`}>
                    <td>{prod.nombre || "Sin nombre"}</td>
                    <td>{prod.cantidad || 0}</td>
                    <td>${prod.precio?.toFixed(2) || "0.00"}</td>
                    <td>${(prod.total ?? (prod.cantidad || 0) * (prod.precio || 0)).toFixed(2)}</td>
                  </tr>
                ))
              )
            ) : (
              <tr>
                <td colSpan="4">No hay ventas registradas</td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" style={{textAlign: 'right', fontWeight: 'bold'}}>Total General:</td>
              <td style={{fontWeight: 'bold'}}>${totalGeneral.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Reportes;