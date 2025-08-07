import '../css/style.css' ;
function Footer(){
    return(
         <footer>
        <div className="top-bar">
          <div> <img src="images/icons/Icon_footer_2.png" alt="" className="icon_footer"/> Envío gratuito en pedidos superiores a $99</div>
          <div> Garantía de reembolso por 30 días</div>
          <div> Productos 100% auténticos</div>
          <div> <img src="images/icons/Icon_footer_1.png" alt="" className="icon_footer"/> Opciones de pago flexibles</div>   
        </div>
      
        <div className="footer-content">
          <div className="column">
            <h4>Categorías Principales</h4>
            <ul>
              <li>Pinturas Interiores</li>
              <li>Pinturas Exteriores</li>
              <li>Pintura Automotriz</li>
              <li>Impermeabilizante</li>
              <li>Anticorrosivos</li>
              <li>Selladores</li>
              <li>Fijadores</li>
            </ul>
          </div>
      
          <div className="column">
            <h4>Compañía</h4>
            <ul>
              <li>Nosotros</li>
              <li>Contacto</li>
              <li>Productos</li>
              <li>Ubicación de las tiendas</li>
            </ul>
          </div>
      
          <div className="column">
            <h4>Centro de Ayuda</h4>
            <ul>
              <li>Servicio al cliente</li>
              <li>Política</li>
              <li>Términos y condiciones</li>
              <li>FAQs</li>
              <li>Mi cuenta</li>
              <li>Soporte de producto</li>
            </ul>
          </div>
      
            <div className="footer-contact">
              <h4>Obtén un <span className="footer-highlight">10%</span> de descuento en tu primera compra</h4>
              <a href="#">Política de Privacidad</a>
              <p>Línea directa 24/7: <a href="tel:+593984638360">(+593) 98 463 8360</a></p>
              <p>Horario de Trabajo: Lunes–Sábado: 9.00am - 5.00pm</p>
              <p>Correo: <a href="mailto:colorex@gmail.com">colorex@gmail.com</a></p>
            <div className="social">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
            <div className="payment-methods"> 
              <img src="images/icons/paypal.png" alt="PayPal"/> 
              <img src="images/icons/mastercard.png" alt="MasterCard"/>
              <img src="images/icons/visa.png" alt="Visa"/>
              <img src="images/icons/stripe.png" alt="Stripe"/>
              <img src="images/icons/klarna.png" alt="Klarna"/>
            </div>
            <p className="copyright">
              © 2025 <strong>Colorex</strong>. All Rights Reserved
            </p>
      </footer>


    );
}
export default Footer;