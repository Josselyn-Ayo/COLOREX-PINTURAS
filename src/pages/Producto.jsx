import { Link } from "react-router-dom";
import Header from '../component/Header';
import Main from '../component/Main';
import MainProducto from '../component/MainProducto';
import Footer from '../component/Footer';
import '../css/productos.css';
import ErrorBoundary from '../component/ErrorBoundary'; // Asegúrate de tener este componente 
import { useCart } from "../component/context/CartContext";



function Producto() {
    const { agregarAlCarrito } = useCart();
  return (
    <>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <Main />
      <MainProducto />

      <section className="alto-rendimiento">
        <h2>PINTURAS Y ACCESORIOS DE ALTO RENDIMIENTO</h2>

        <div className="destacados">
          <div className="tarjeta azul">
            <div className="contenido">
              <h3>Revestimientos de Protección</h3>
              <h3 className="titu">Aislamiento Superior</h3>
              <p>En Colorex, Fusionamos Tecnología Y Funcionalidad Para Proyectos DIY Y Profesionales, Donde La Eficiencia Se Encuentra Con El Diseño.</p>
              <a href="#" className="boton">COMPRA AHORA</a>
            </div>
          </div>

          <div className="tarjeta amarilla">
            <div className="contenido">
              <h3>Barnices de secado ultrarrápido</h3>
              <p>Ideal para retoques automotrices</p>
              <a href="#" className="boton negro">COMPRA AHORA</a>
            </div>
          </div>
        </div>
      </section>

      <section className="categorias">
        <h3>CATEGORIAS POPULARES</h3>
        <div className="grid-categorias">
          {[
            { title: "Pinturas de Interiores", items: 74, img: "images/products/product_11.png", alt: "Interiores" },
            { title: "Pinturas Automotrices", items: 35, img: "images/products/product_12.png", alt: "Automotrices" },
            { title: "Recubrimientos Exteriores", items: 9, img: "images/products/product_13.png", alt: "Exteriores" },
            { title: "Imprimaciones y Selladores", items: 58, img: "images/products/product_14.png", alt: "Selladores" },
            { title: "Efectos Decorativos", items: 12, img: "images/products/product_15.png", alt: "Decorativos" },
            { title: "Línea Ecológica", items: 22, img: "images/products/product_16.png", alt: "Línea Ecológica" },
            { title: "Herramientas Profesionales", items: 33, img: "images/products/product_17.png", alt: "Herramientas" },
            { title: "Aislantes Térmicos", items: 5, img: "images/products/product_18.png", alt: "Aislantes" },
          ].map(({ title, items, img, alt }, idx) => (
            <div className="categoria" key={idx}>
              <div className="texto">
                <strong>{title}</strong><br />
                {items} Items
              </div>
              <img src={img} alt={alt} />
            </div>
          ))}
        </div>
      </section>

      <div className="products-display-grid">
        {[
          {
            id: 1,
            title: "Masilla MUSTANG 6032 de dos componentes con resina",
            rating: 5,
            reviews: 2,
            img: "images/products/product_1.png",
            priceCurrent: 129.0,
            priceOriginal: 159.0,
            discount: 15,
            purchases: "1.286 compras",
            isNew: false,
          },
          {
            id: 2,
            title: "Covertone - Wesco",
            rating: 4,
            reviews: 7,
            img: "images/products/product_2.png",
            priceCurrent: 1259.0,
            priceOriginal: null,
            discount: null,
            purchases: "93 compras",
            isNew: false,
          },
          {
            id: 3,
            title: "Esmalte Sintético Pato Pinturas CPP",
            rating: 5,
            reviews: null,
            img: "images/products/product_3.png",
            priceCurrent: 29.0,
            priceOriginal: 59.0,
            discount: 45,
            purchases: "256 compras",
            isNew: true,
          },
      ].map(
  ({
    id,
    title,
    rating,
    reviews,
    img,
    priceCurrent,
    priceOriginal,
    discount,
    purchases,
    isNew,
  }) => (
    <div className="product-display-card" key={id}>
      {isNew && <div className="product-new-badge">NEW</div>}

      <div className="product-display-title">{title}</div>

      <div className="product-display-rating">
        <div className="rating-stars">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={"rating-star" + (i < rating ? "" : " star-empty")}
            >
              ★
            </span>
          ))}
        </div>
        {reviews !== null && (
          <span className="rating-number">({reviews})</span>
        )}
      </div>

      <div className="product-display-image">
        <img src={img} alt={title} />
      </div>

      <div className="product-display-price">
        <span className="price-current">${priceCurrent.toFixed(2)}</span>
        {priceOriginal && (
          <span className="price-original">${priceOriginal.toFixed(2)}</span>
        )}
        {discount && (
          <span className="price-discount-badge">{discount}% OFF</span>
        )}
      </div>

      <div className="product-purchase-info">
        <span className="product-purchase-count">{purchases}</span>
        <button className="product-favorite-btn">♡</button>
      </div>

      {/* ✅ Botón funcional */}
     <button 
        onClick={() => agregarAlCarrito({ id, title, priceCurrent})}>
        Agregar al carrito
    </button>

    </div>
            )
        )}
        </div>


      <div className="pagination">
        <button className="page active">1</button>
        <button className="page">2</button>
        <button className="page">3</button>
        <button className="page">4</button>
        <span className="dots">...</span>
        <button className="page">20</button>
        <button className="page">Próximo</button>
      </div>

      <Footer />
    </>
  );
}


export default Producto;
