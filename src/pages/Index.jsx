import React, { useContext, useState } from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Main from '../component/Main';
import MainProducto from '../component/MainProducto';
import CarritoDashboard from '../component/CarritoDashboart';
import { CartContext } from '../CartContext';

function Index() {
  const formatPrice = (price) => {
  if (typeof price === 'number') return price.toFixed(2);
  return price; // Por si viene como rango ("49.00 - 99.00")
};

  const { carrito, carritoInfo } = useContext(CartContext);
        const [mostrarCarrito, setMostrarCarrito] = useState(false);
    
        // Calcular total
        const total = carrito.reduce((sum, prod) => sum + (prod.priceCurrent || 0), 0);
    
        const handleCheckout = () => {
            alert("Procesando pago...");
            // Puedes redirigir o limpiar el carrito aquí
        };

  return (
    <>
      <div className="top-banner" />
      <div className="banner-content">
        <span className="banner-text">
          Pintura Para Interiores <br />
          <span className="banner-small">Pintura de pared premium</span>
        </span>
        <div className="banner-offer">
          <div className="box-banner">
            <span className="offer-text">10%</span>
          </div>
          <span className="offer-small1">
            Introduce el código <br />
            <span className="offer-text1">DESCUENTO</span>
          </span>
        </div>
        <div className="banner-images">
          <img id="image-banner1" src="/images/oferts/Pinturas_Oferta_1.png" alt="Oferta 1" />
          <img id="image-banner2" src="/images/oferts/Pinturas_Oferta2.png" alt="Oferta 2" />
        </div>
        <button className="banner-btn">COMPRAR AHORA</button>
      </div>
      <Header 
                carrito={carrito} 
                carritoInfo={carritoInfo} 
                onCarritoClick={() => setMostrarCarrito(true)} 
            />
      <Main />
       {mostrarCarrito && (
                <CarritoDashboard
                    carrito={carrito}
                    total={total}
                    onClose={() => setMostrarCarrito(false)}
                    onCheckout={handleCheckout}
                />
            )}
      <MainProducto />
      <div className="title">
        <span>Categorías Populares</span> Productos Recomendados
      </div>

      <div className="categories">
        {[
          { label: 'Nuevos Lanzamientos', className: 'new' },
          { label: 'Liquidaciones', className: 'sale' },
          { label: 'Pinturas para Interiores', icon: 'icon_8.png' },
          { label: 'Pinturas en Spray', icon: 'icon_7.png' },
          { label: 'Pinturas Especializadas', icon: 'icon_6.png' },
          { label: 'Accesorios Profesionales', icon: 'icon_5.png' },
          { label: 'Barnices y Selladores', icon: 'icon_4.png' },
          { label: 'Paleta de Colores', icon: 'icon_3.png' },
          { label: 'Pinturas para Exteriores', icon: 'icon_2.png' },
          { label: 'Pinturas para Autos', icon: 'icon_1.png' }
        ].map((category, index) => (
          <div className="category" key={index}>
            <div className={`icon-circulo ${category.className || 'blue-icon'}`}>
              {category.icon ? (
                <img className="icons" src={`images/icons/${category.icon}`} alt={category.label} />
              ) : (
                category.label
              )}
            </div>
            <div className="label">{category.label}</div>
          </div>
        ))}
      </div>

      <div className="promo-container">
        <div className="promo azul">
          <div className="texto">
            <div className="ofert">
              <p className="oferta">OFERTA <br />DESTACADA</p>
              <p className="precio">$69</p>
            </div>
            <p className="detalle">Kit Básico de <br />Pintura (3 latas)</p>
            <button>Compra Ahora</button>
          </div>
          <div className="promo_img_2">
            <img className="Harris_2" src="/images/Harris_2.png" alt="Pintura morada Harris" />
          </div>
        </div>

        <div className="promo amarillo">
          <div className="promo_img_1">
            <img className="Harris_1" src="/images/Harris_1.png" alt="Pintura rosa Harris" />
          </div>
          <div className="texto">
            <div className="ofert1">
              <div className="etiqueta">10% OFF</div>
              <div className="gana">
                <p className="titulo">Pinturas<br />en Aerosol</p>
                <p className="descripcion">
                  Gana 10% de crédito al unirte a<br />
                  <span className="club">ColorClub.</span> <a href="#">¡Descúbrelo Ahora!</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="products-header">
          <div className="title">
            <span>Descubre</span> la excelencia en <br />pinturas
          </div>

          <div className="products-nav-tabs">
            {[
              'Los Mas Vendidos',
              'Pintura Exteriores',
              'Pintura Interiores',
              'Impermeabilizante',
              'Anticorrosivos',
              'Selladores',
              'Fijadores'
            ].map((tab, index) => (
              <button
                className={`products-nav-tab ${index === 0 ? 'tab-active' : ''}`}
                key={index}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="products-display-grid">
          {[
            { title: 'Masilla MUSTANG 6032 de dos componentes con resina', price: 129.0, originalPrice: 159.0, discount: 15, rating: 5, purchases: 1286, image: 'product_1.png' },
            { title: 'Covertone - Wesco', price: 1259.0, rating: 4, purchases: 93, image: 'product_2.png' },
            { title: 'Esmalte Sintético Pato Pinturas CPP', price: 29.0, originalPrice: 59.0, discount: 45, rating: 5, purchases: 256, image: 'product_3.png', new: true },
            { title: 'Pintura Intervinil Cubriente Pintuco', price: 79.0, originalPrice: 99.0, discount: 20, rating: 5, purchases: 562, image: 'product_4.png', new: true },
            { title: 'Dura-Life', price: '49.00 - 99.00', rating: 5, purchases: 1.2, image: 'product_5.png' }
          ].map((product, index) => (
            <div className={`product-display-card product-display-${index + 1}`} key={index}>
              {product.new && <div className="product-new-badge">NEW</div>}
              <div className="product-display-title">{product.title}</div>

              <div className="product-display-rating">
                <div className="rating-stars">
                  {[...Array(5)].map((_, starIndex) => (
                    <span
                      className={`rating-star ${starIndex < product.rating ? '' : 'star-empty'}`}
                      key={starIndex}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="rating-number">({product.purchases})</span>
              </div>

              <div className="product-display-image">
                <img src={`images/products/${product.image}`} alt={product.title} />
              </div>

              <div className="product-display-price">
                <span className="price-current">${formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="price-original">${formatPrice(product.originalPrice)}</span>
                )}
                {product.discount && (
                  <span className="price-discount-badge">{product.discount}% OFF</span>
                )}
              </div>

              <div className="product-purchase-info">
                <span className="product-purchase-count">{product.purchases} compras</span>
                <button className="product-favorite-btn">♡</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="proyectos">
        <h2 className="proyectos-h2">
          Colores para <span>diferentes proyectos</span>
        </h2>
        <div className="grid">
          {[
            { img: 'picture_4.png', title: 'Preparación de la pared' },
            { img: 'picture_3.png', title: 'Pintura exteriores' },
            { img: 'picture_2.png', title: 'Pintura interiores' },
            { img: 'picture_1.png', title: 'Pintura automotriz' }
          ].map((project, index) => (
            <div className="card" key={index}>
              <img src={`images/stock_pictures/${project.img}`} alt={project.title} />
              <div className="card-text">
                <h3>{project.title}</h3>
                <a href="#">Ver Todo</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="banner">
        <div className="banner-content">
          <div className="left">
            <h1>COLOREX</h1>
            <div className="product-images">
              {['image_1.png', 'image_2.png', 'image_3.png'].map((img, index) => (
                <img
                  key={index}
                  src={`images/${img}`}
                  alt={`Producto ${index + 1}`}
                  className={`Producto-${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="right">
            <p>Paga al instante, 0% interés</p>
            <div className="move">
              <strong>
                Compra <span>Ahora</span>,
              </strong>{' '}
              <span className="Después">Paga Después</span>
              <a href="#" className="btn">
                DESCÚBRELO AHORA
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="products-section">
        <div className="products-header">
          <div className="title">
            <div className="Liquidación">
              <span>Liquidación</span> | Hasta un 70% de descuento
              <a href="#">Ver Todo</a>
            </div>
          </div>

          <div className="products-display-grid">
            {[
              { title: 'DRY FALL NX', price: 129.0, originalPrice: 159.0, discount: 15, rating: 5, purchases: 1286, image: 'product_6.png' },
              { title: 'PPG - Thinner 21-06 Cubeta', price: 1259.0, rating: 4, purchases: 93, image: 'product_7.png' },
              { title: 'AL-10 NX', price: 29.0, originalPrice: 59.0, discount: 45, rating: 5, purchases: 256, image: 'product_8.png', new: true },
              { title: 'Lavamani 500 ml', price: 79.0, originalPrice: 99.0, discount: 20, rating: 5, purchases: 562, image: 'product_9.png', new: true },
              { title: 'TOP TOTAL Fibratado 10 años 19L', price: '49.00 - 99.00', rating: 5, purchases: 1.2, image: 'product_10.png' }
            ].map((product, index) => (
              <div className={`product-display-card product-display-${index + 1}`} key={index}>
                {product.new && <div className="product-new-badge">NEW</div>}
                <div className="product-display-title">{product.title}</div>

                <div className="product-display-rating">
                  <div className="rating-stars">
                    {[...Array(5)].map((_, starIndex) => (
                      <span
                        className={`rating-star ${starIndex < product.rating ? '' : 'star-empty'}`}
                        key={starIndex}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="rating-number">({product.purchases})</span>
                </div>

                <div className="product-display-image">
                  <img src={`images/products/${product.image}`} alt={product.title} />
                </div>

                <div className="product-display-price">
                  <span className="price-current">${formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="price-original">${formatPrice(product.originalPrice)}</span>
                  )}
                  {product.discount && (
                    <span className="price-discount-badge">{product.discount}% OFF</span>
                  )}
                </div>

                <div className="product-purchase-info">
                  <span className="product-purchase-count">{product.purchases} compras</span>
                  <button className="product-favorite-btn">♡</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
