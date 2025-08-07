import '../css/abaut.css';
import Header from '../component/Header';
import Main from '../component/Main';
import Footer from '../component/Footer';
function Abaut(){
    return(      
    <>
  <div className="top-banner"/>
    <div className="banner-content">
      <span className="banner-text">Pintura Para Interiores <br /> <span className="banner-small">Pintura de pared premium</span></span> 
      <div className="banner-offer">
        <div className="box-banner">
          <span className="offer-text">10%</span>
        </div>
        <span className="offer-small1">Introduce el código <br /><span className="offer-text1">DESCUENTO</span></span>
      </div>
      <div className="banner-images">
        <img id="image-banner1" src="images/oferts/Pinturas_Oferta_1.png" alt=""/>
        <img id="image-banner2" src="images/oferts/Pinturas_Oferta2.png" alt=""/>
      </div>
      <button className="banner-btn">COMPRAR AHORA</button>
    </div>
    <Header/>
    <Main/>
    <section className="hero">
    <div className="container">
        <div className="hero-content">
            <h1>La excelencia<br/> <span className="abaut-titulo">en cada proyecto</span></h1>
            <p>Líderes en Soluciones de Pintura y Recubrimientos<br/>en Quito Ecuador</p>
        </div>
    </div>
</section>

<section className="stats">
    <div className="container">
        <div className="stats-grid">
            <div className="stat-item">
                <span className="stat-number">+500 CLIENTES <br/>SATISFECHOS</span>
                <p className="stat-description">Desde nuestra apertura en [año de fundación] hemos entregado soluciones personalizadas</p>
            </div>
            <div className="stat-item">
                <span className="stat-number">+1K PROYECTOS <br/>ASESORADOS</span>
                <p class="stat-description">Desde hogares expresos hasta renovaciones integrales</p>
            </div>
            <div className="stat-item">
                <span className="stat-number">2 TIENDAS <br/>FÍSICAS</span>
                <p className="stat-description">Puntos de venta y distribuidores certificados</p>
            </div>
        </div>

        <div className="content">
            <div className="content-image"></div>
            <div className="content-text">
                <h2>Conectamos a miles de compradores, transformamos espacios y vehículos con soluciones accesibles y creativas.</h2>
                <p>En el corazón de Ecuador, hay un rincón donde los colores cobran vida y las ideas se transforman en realidad. Colorex no es solo una tienda de pinturas; es un espacio de inspiración, un aliado para quienes creen que un hogar o un auto pueden reflejar personalidad, historia y cuidado.</p>
                <button className="btn-primary">¿QUE NOS HACE ÚNICOS?</button>
            </div>
        </div>
    </div>
</section>

<section class="features">
    <div class="container">
        <div class="features-grid">
            <div class="feature-item">
                <h3 class="feature-title">CALIDAD CERTIFICADA, RESULTADOS GARANTIZADOS</h3>
                <p class="feature-description">En Colorex, trabajamos exclusivamente con proveedores reconocidos y marcas de confianza. Cada producto que recomendamos se alinea con nuestros estándares de alta precisión técnica. Cada compra está protegida por rigurosos controles de adherencia, durabilidad y seguridad.</p>
            </div>
            <div class="feature-item">
                <h3 class="feature-title">ENTREGAS RÁPIDAS, SOLUCIONES SIN ESPERAS</h3>
                <p class="feature-description">En Colorex, entendemos que el tiempo es clave en tus proyectos. Ya sea que necesites pintura para el salón que renuevas o coating familiar de estilo para terminar un enfoque automotriz fin de semana.</p>
            </div>
            <div class="feature-item">
                <h3 class="feature-title">PRECIOS JUSTOS, SIN COMPROMETER CALIDAD</h3>
                <p class="feature-description">En Colorex, creemos que la excelencia no debe costar una fortuna. No hay trucos, hemos creado un modelo de negocio que combina calidad técnica, transparencia y acceso democrático, para que profesionales, familias y entusiastas del DIY.</p>
            </div>
        </div>
    </div>
</section>

<section class="mision-vision">
  <div class="bloque">
    <h3>NUESTRA MISIÓN</h3>
    <p>En Colorex, transformamos espacios y vehículos con soluciones innovadoras y accesibles, poniendo el poder de la creatividad en manos de todos. Nos comprometemos a:</p>
    <ul>
      <li>Proveer pinturas y recubrimientos de calidad profesional sin sobrecostos, eliminando intermediarios y trabajando directamente con fabricantes éticos.</li>
      <li>Educar y empoderar a nuestra comunidad a través de talleres prácticos, guías personalizadas y atención cercana.</li>
      <li>Proteger el medioambiente con fórmulas bajas en VOC, envases reciclables y programas de recolección de sobrantes.</li>
      <li>Ser el aliado local que resuelve urgencias, inspira proyectos y celebra cada historia de transformación.</li>
    </ul>
  </div>

  <div class="imagen-central">
    <img src="images/stock_pictures/picture_13.png" alt="Trabajador pintando pared" />
  </div>

  <div class="bloque">
    <h3>NUESTRA VISIÓN</h3>
    <p>Aspiramos a ser el referente de innovación sostenible en pinturas para hogar y automotriz, reconocidos por:</p>
    <ul>
      <li>Revolucionar la industria con tecnologías accesibles, como pinturas inteligentes que cambian con la temperatura o barnices autoreparables.</li>
      <li>Expandir nuestra red comunitaria a 10 ciudades para 2030, manteniendo la esencia artesanal y el trato humano que nos define.</li>
      <li>Liderar el movimiento de economía circular en el sector, logrando que el 90% de nuestros envases sean reutilizados o reciclados.</li>
      <li>Inspirar a una generación de creadores que vean en cada pared, mueble o auto una oportunidad para contar su historia con color.</li>
    </ul>
  </div>
  </section>
  <Footer/>
  </>
  );
}
export default Abaut;