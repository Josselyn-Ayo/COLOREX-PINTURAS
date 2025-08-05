import Header from '../component/Header';
import Main from '../component/Main';
import MainProducto from '../component/MainProducto';
import Footer from '../component/Footer';
import '../css/productos.css';
function Producto(){
    return(
    <>
    <Header/>
     <Main/>
     <MainProducto/>
        <section class="alto-rendimiento">
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
    <section className="categorias">
        <h3>CATEGORIAS POPULARES</h3>
        <div className="grid-categorias">
          <div className="categoria">
            <div className="texto">
              <strong>Pinturas de Interiores</strong><br/>
              74 Items
            </div>
            <img src="imagenes/products/product_1" alt="Interiores" />
          </div>
          <div className="categoria">
            <div className="texto">
              <strong>Pinturas Automotrices</strong><br/>
              35 Items
            </div>
            <img src="images/products/product_12.png" alt="Automotrices" />
          </div>
          <div className="categoria">
            <div className="texto">
              <strong>Recubrimientos Exteriores</strong><br/>
              9 Items
            </div>
            <img src="images/products/product_13.png" alt="Exteriores" />
          </div>
          <div className="categoria">
            <div className="texto">
              <strong>Imprimaciones y Selladores</strong><br/>
              58 Items
            </div>
            <img src="images/products/product_14.png" alt="Selladores" />
          </div>
          <div className="categoria">
            <div className="texto">
              <strong>Efectos Decorativos</strong><br/>
              12 Items
            </div>
            <img src="images/products/product_15.png" alt="Decorativos" />
          </div>
          <div className="categoria">
            <div className="texto">
              <strong>Línea Ecológica</strong><br/>
              22 Items
            </div>
            <img src="images/products/product_16.png" alt="Línea Ecológica" />
          </div>
          <div className="categoria">
            <div className="texto">
              <strong>Herramientas Profesionales</strong><br/>
              33 Items
            </div>
            <img src="images/products/product_17.png" alt="Herramientas" />
          </div>
          <div className="categoria">
            <div className="texto">
              <strong>Aislantes Térmicos</strong><br/>
              5 Items
            </div>
            <img src="images/products/product_18.png" alt="Aislantes" />
          </div>
        </div>
      </section>

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

        <div class="product-purchase-info">
            <span class="product-purchase-count">1.286 compras</span>
            <button class="product-favorite-btn">♡</button>
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
                <span classNane="rating-star">★</span>
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
  
          <div className="product-purchase-info">
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
  
          <div className="product-purchase-info">
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
  
          <div className="product-purchase-info">
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
      <Footer/>
    </section>
      </>


    


    );
}
export default Producto;