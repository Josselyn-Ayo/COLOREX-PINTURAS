import '../css/contact.css';
import Header from '../component/Header';
import Main from '../component/Main';
import Footer from '../component/Footer';
function Contactos(){
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
    <section class="contacto">
        <div class="formulario">
            <h2>¿LISTO PARA TRANSFORMAR TU ESPACIO?</h2>
            <p>Cuéntanos sobre tu proyecto y te ayudaremos a elegir los materiales perfectos.</p>
            
            <form id="contact-form">
              <div class="fila">
                <div class="input-box">
                  <label>Nombre <span class="required">*</span></label>
                  <input type="text" name="nombre" required/>
                </div>
                <div class="input-box">
                  <label>Apellido <span class="required">*</span></label>
                  <input type="text" name="apellido" required/>
                </div>
              </div>
              <div class="input-box">
                <label>Correo Electrónico <span class="required">*</span></label>
                <input type="email" name="email" required/>
              </div>
              <div class="input-box">
                <label>Teléfono <span class="opcional">(Opcional)</span></label>
                <input type="tel" name="telefono"/>
              </div>
              <div class="input-box">
                <label>Ciudad / Región <span class="required">*</span></label>
                <select name="ciudad" required>
                  <option>Ecuador (ECU)</option>
                  <option>Quito</option>
                  <option>Guayaquil</option>
                  <option>Cuenca</option>
                </select>
              </div>
              <div class="input-box">
                <label>Asunto <span class="opcional">(Opcional)</span></label>
                <input type="text" name="asunto"/>
              </div>
              <div class="campo">
                <label>Mensaje</label>
                <textarea name="mensaje" rows="4" placeholder="Describe tu proyecto..."></textarea>
              </div>
              <button type="submit" class="btn-enviar">ENVIAR MENSAJE</button>
            </form>            
        </div>

        <div class="info-contacto">
            <div class="caja">
                <h4>COLOREX - TALLER & TIENDA</h4>
                <p>Avenida Cosme Osorio esquina con Alberto Orellana, Quito, Ecuador</p>
                <p>(+593) 98 463 8360</p>
                <a href="mailto:colorex@gmail.com">colorex@gmail.com</a>
            </div>

            <div class="caja">
                <h4>ALMACÉN COLOREX - ZONA INDUSTRIAL</h4>
                <p>Avenida Cosme Osorio esquina con Alberto Orellana, Quito, Ecuador</p>
                <p>(+593) 98 463 8360</p>
                <a href="mailto:contactocolorex@gmail.com">contactocolorex@gmail.com</a>
            </div>

                <div class="social">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                  </div>
        </div>
    </section>
    <div class="imagen">
        <img src="images/stock_pictures/picture_10.png" alt="Persona pintando una pared azul"/>
    </div>
    <section class="mapa-seccion">
        <div class="container">
            <div class="mapa-titulo">
                <h2>ENCUÉNTRANOS EN GOOGLE MAPS</h2>
            </div>
            <div class="mapa-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.475234147419!2d-78.51238!3d-0.22985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a107e1cd44b%3A0x88a284628e5b2621!2sQuito%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1635959876543!5m2!1sen!2sus"
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </section>
    <Footer/>

    </>


    );
}
export default Contactos;