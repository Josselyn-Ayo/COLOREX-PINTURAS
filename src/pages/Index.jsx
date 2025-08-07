import Footer from '../component/Footer';
import Header from '../component/Header';
import Main from '../component/Main';
import MainProducto from '../component/MainProducto';
function Index(){
    return(
<>
 <Header/>
  <Main/>
  <MainProducto/>
        <div className="title">
    <span>Categorías Populares</span> Productos Recomendados
  </div>

  <div className="categories">
    <div className="category">
      <div className="icon-circulo new">new</div>
      <div className="label">Nuevos Lanzamientos</div>
    </div>
    <div className="category">
      <div className="icon-circulo sale">sale</div>
      <div className="label">Liquidaciones</div>
    </div>
    <div className="category">
      <div className="icon-circulo blue-icon"><img class="icons" src="images/icons/icon_8.png" alt=""/></div>
      <div className="label">Pinturas para Interiores</div>
    </div>
    <div className="category">
      <div className="icon-circulo blue-icon"><img class="icons" src="images/icons/icon_7.png" alt=""/></div>
      <div className="label">Pinturas en Spray</div>
    </div>
    <div className="category">
      <div className="icon-circulo blue-icon"><img class="icons" src="images/icons/icon_6.png" alt=""/></div>
      <div className="label">Pinturas Especializadas</div>
    </div>
    <div className="category">
      <div className="icon-circulo blue-icon"><img class="icons" src="images/icons/icon_5.png" alt=""/></div>
      <div className="label">Accesorios Profesionales</div>
    </div>
    <div className="category">
      <div className="icon-circulo blue-icon"><img class="icons" src="images/icons/icon_4.png" alt=""/></div>
      <div className="label">Barnices y Selladores</div>
    </div>
    <div className="category">
      <div className="icon-circulo blue-icon"><img class="icons" src="images/icons/icon_3.png" alt=""/></div>
      <div className="label">Paleta de Colores</div>
    </div>
    <div className="category">
      <div className="icon-circulo blue-icon"><img class="icons" src="images/icons/icon_2.png" alt=""/></div>
      <div className="label">Pinturas para Exteriores</div>
    </div>
    <div className="category">
      <div className="icon-circulo blue-icon"><img class="icons" src="images/icons/icon_1.png" alt=""/></div>
      <div className="label">Pinturas para Autos</div>
    </div>
  </div>
  <div className="promo-container">
    <div className="promo azul">
      <div className="texto">
        <div className="ofert">
        <p className="oferta">OFERTA <br/>DESTACADA</p>
        <p className="precio">$69</p>
        </div>
        <p className="detalle">Kit Básico de <br/>Pintura (3 latas)</p>
        <button>Compra Ahora</button>
      </div>
      <div className="promo_img_2">
      <img className="Harris_2" src="images/Harris_2.png" alt="Pintura morada Harris"/>
      </div>
    </div>

    <div className="promo amarillo">
      <div className="promo_img_1">
      <img className="Harris_1" src="images/Harris_1.png" alt="Pintura rosa Harris"/>
      </div>
      <div className="texto">
        <div className="ofert1">
        <div className="etiqueta">10% OFF</div>
        <div className="gana">
        <p className="titulo">Pinturas<br/>en Aerosol</p>
        <p className="descripcion">Gana 10% de crédito al unirte a<br/>
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
        <span>Descubre</span>  la excelencia en <br/> pinturas
      </div>
        
        <div className="products-nav-tabs">
            <button className="products-nav-tab tab-active">Los Mas Vendidos</button>
            <button className="products-nav-tab">Pintura Exteriores</button>
            <button className="products-nav-tab">Pintura Interiores</button>
            <button className="products-nav-tab">Impermeabilizante</button>
            <button className="products-nav-tab">Anticorrosivos</button>
            <button className="products-nav-tab">Selladores</button>
            <button className="products-nav-tab">Fijadores</button>
        </div>
    </div>

    <div className="products-display-grid">
        <div className="product-display-card product-display-1">
            <div className="product-display-title">Masilla MUSTANG 6032 de dos componentes con resina</div>
            
            <div className="product-display-rating">
                <div className="rating-stars">
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                </div>
                <span className="rating-number">(2)</span>
            </div>

            <div className="product-display-image"><img src="images/products/product_1.png" alt=""/></div>

            <div className="product-display-price">
                <span className="price-current">$129.00</span>
                <span className="price-original">$159.00</span>
                <span className="price-discount-badge">15% OFF</span>
            </div>

            <div classNmae="product-purchase-info">
                <span className="product-purchase-count">1.286 compras</span>
                <button className="product-favorite-btn">♡</button>
            </div>
        </div>
        <div className="product-display-card product-display-2">
            <div className="product-display-title">Covertone - Wesco</div>
            
            <div className="product-display-rating">
                <div className="rating-stars">
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star star-empty">★</span>
                </div>
                <span className="rating-number">(7)</span>
            </div>

            <div className="product-display-image"><img src="images/products/product_2.png" alt=""/></div>

            <div className="product-display-price">
                <span className="price-current">$1,259.00</span>
            </div>

            <div className="product-purchase-info">
                <span className="product-purchase-count">93 compras</span>
                <button className="product-favorite-btn">♡</button>
            </div>
        </div>

        <div className="product-display-card product-display-3">
            <div className="product-new-badge">NEW</div>
            <div className="product-display-title">Esmalte Sintético Pato Pinturas CPP</div>
            
            <div className="product-display-rating">
                <div className="rating-stars">
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                </div>
            </div>

            <div className="product-display-image"><img src="images/products/product_3.png" alt=""/></div>

            <div className="product-display-price">
                <span className="price-current">$29.00</span>
                <span className="price-original">$59.00</span>
                <span className="price-discount-badge">45% OFF</span>
            </div>

            <div className="product-purchase-info">
                <span className="product-purchase-count">256 compras</span>
                <button className="product-favorite-btn">♡</button>
            </div>
        </div>

        <div className="product-display-card product-display-4">
            <div className="product-new-badge">NEW</div>
            <div className="product-display-title">Pintura Intervinil Cubriente Pintuco</div>
            
            <div className="product-display-rating">
                <div className="rating-stars">
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                </div>
            </div>

            <div className="product-display-image"><img src="images/products/product_4.png" alt=""/></div>

            <div className="product-display-price">
                <span className="price-current">$79.00</span>
                <span className="price-original">$99.00</span>
                <span className="price-discount-badge">20% OFF</span>
            </div>

            <div className="product-purchase-info">
                <span className="product-purchase-count">562 compras</span>
                <button className="product-favorite-btn">♡</button>
            </div>
        </div>

        <div className="product-display-card product-display-5">
            <div className="product-display-title">Dura-Life</div>
            
            <div className="product-display-rating">
                <div className="rating-stars">
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                    <span className="rating-star">★</span>
                </div>
            </div>

            <div className="product-display-image"><img src="images/products/product_5.png" alt=""/></div>

            <div className="product-display-price">
                <span className="price-current">$49.00 - $99.00</span>
            </div>

            <div className="product-purchase-info">
                <span className="product-purchase-count">1.2 compras</span>
                <button className="product-favorite-btn">♡</button>
            </div>
        </div>
    </div>
</div>

<section className="proyectos">
  <h2 className="proyectos-h2">Colores para <span>diferentes proyectos</span></h2>
  <div className="grid">
    <div className="card">
      <img src="images/stock_pictures/picture_4.png" alt="Preparación de la pared"/>
      <div className="card-text">
        <h3>Preparación de la pared</h3>
        <a href="#">Ver Todo</a>
      </div>
    </div>
    <div class="card">
      <img src="images/stock_pictures/picture_3.png" alt="Pintura exteriores"/>
      <div class="card-text">
        <h3>Pintura exteriores</h3>
        <a href="#">Ver Todo</a>
      </div>
    </div>
    <div class="card">
      <img src="images/stock_pictures/picture_2.png" alt="Pintura interiores"/>
      <div class="card-text">
        <h3>Pintura interiores</h3>
        <a href="#">Ver Todo</a>
      </div>
    </div>
    <div className="card">
      <img src="images/stock_pictures/picture_1.png" alt="Pintura automotriz"/>
      <div className="card-text">
        <h3>Pintura automotriz</h3>
        <a href="#">Ver Todo</a>
      </div>
    </div>
  </div>
</section>

<div className="banner">
  <div className="banner-content">
  <div className="left">
    <h1>COLOREX</h1>
    <div className="product-images">
      <img src="images/image_1.png" alt="Producto 1" class="Producto-1" />
      <img src="images/image_2.png" alt="Producto 2" class="Producto-2" />
      <img src="images/image_3.png" alt="Producto 3" class="Producto-3" />
    </div>
  </div>
  <div className="right">
    <p>Paga al instante, 0% interés</p>
    <div className="move">
    <strong>Compra <span>Ahora</span>,</strong> <span class="Después">Paga Después</span>
    <a href="#" className="btn">DESCÚBRELO AHORA</a>
    </div>
  </div>
</div>
</div>


<div className="products-section">
  <div className="products-header">
    <div className="title">
      <div className="Liquidación">
      <span>Liquidación</span>  | Hasta un 70% de descuento
      <a href="#">Ver Todo</a>
      </div>
    </div>
      
    <div className="products-display-grid">
      <div className="product-display-card product-display-1">
          <div className="product-display-title">DRY FALL NX</div>
          
          <div className="product-display-rating">
              <div className="rating-stars">
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
              </div>
              <span className="rating-number">(2)</span>
          </div>

          <div className="product-display-image"><img src="images/products/product_6.png" alt=""/></div>

          <div className="product-display-price">
              <span className="price-current">$129.00</span>
              <span className="price-original">$159.00</span>
              <span className="price-discount-badge">15% OFF</span>
          </div>

          <div className="product-purchase-info">
              <span className="product-purchase-count">1.286 compras</span>
              <button className="product-favorite-btn">♡</button>
          </div>
      </div>

      
      <div className="product-display-card product-display-2">
          <div className="product-display-title">PPG - Thinner 21-06 Cubeta</div>
          
          <div className="product-display-rating">
              <div className="rating-stars">
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star star-empty">★</span>
              </div>
              <span className="rating-number">(7)</span>
          </div>

          <div className="product-display-image"><img src="images/products/product_7.png" alt=""/></div>

          <div className="product-display-price">
              <span className="price-current">$1,259.00</span>
          </div>

          <div className="product-purchase-info">
              <span className="product-purchase-count">93 compras</span>
              <button className="product-favorite-btn">♡</button>
          </div>
      </div>
      <div className="product-display-card product-display-3">
          <div className="product-new-badge">NEW</div>
          <div className="product-display-title">AL-10 NX</div>
          
          <div className="product-display-rating">
              <div className="rating-stars">
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
              </div>
          </div>

          <div className="product-display-image"><img src="images/products/product_8.png" alt=""/></div>

          <div className="product-display-price">
              <span className="price-current">$29.00</span>
              <span className="price-original">$59.00</span>
              <span className="price-discount-badge">45% OFF</span>
          </div>

          <div className="product-purchase-info">
              <span className="product-purchase-count">256 compras</span>
              <button className="product-favorite-btn">♡</button>
          </div>
      </div>

      <div className="product-display-card product-display-4">
          <div className="product-new-badge">NEW</div>
          <div className="product-display-title">Lavamani 500 ml</div>
          
          <div className="product-display-rating">
              <div className="rating-stars">
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
              </div>
          </div>

          <div className="product-display-image"><img src="images/products/product_9.png" alt=""/></div>

          <div className="product-display-price">
              <span className="price-current">$79.00</span>
              <span className="price-original">$99.00</span>
              <span className="price-discount-badge">20% OFF</span>
          </div>

          <div className="product-purchase-info">
              <span className="product-purchase-count">562 compras</span>
              <button className="product-favorite-btn">♡</button>
          </div>
      </div>

      <div className="product-display-card product-display-5">
          <div className="product-display-title">TOP TOTAL Fibratado 10 años 19L</div>
          
          <div className="product-display-rating">
              <div className="rating-stars">
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
                  <span className="rating-star">★</span>
              </div>
          </div>

          <div className="product-display-image"><img src="images/products/product_10.png" alt=""/></div>

          <div className="product-display-price">
              <span className="price-current">$49.00 - $99.00</span>
          </div>

          <div className="product-purchase-info">
              <span className="product-purchase-count">1.2 compras</span>
              <button className="product-favorite-btn">♡</button>
          </div>
      </div>
  </div>
</div>
</div>
 <Footer/>
</>


    );
}
export default Index;
