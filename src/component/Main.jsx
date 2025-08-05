import '../css/style.css';
import { Link } from "react-router-dom";
function Main(){
    return(
        <div class="navbar">
        <div class="nav-left">
          <div class="dropdown">
            <div class="dropdown-button">Otros Productos <i class="fas fa-chevron-down"></i></div>
            <div class="dropdown-content">
              <a href="#">Pinturas Interiores</a>
              <a href="#">Pinturas Exteriores</a>
              <a href="#">Pinturas Para Autos</a>
              <a href="#">Brochas y Rodillos</a>
              <a href="#">Suministros de Pintura</a>
            </div>
          </div>
          <div class="nav-links">
            <a href="/products">Productos</a>
            <Link to="/abaut">Nosotros</Link>
            <Link to="/contactos">Contacto</Link>
          </div>
        </div>
        <div class="nav-right">
          <span>En línea 24/7</span> <strong>(+593) 98 463 8360</strong>
        </div>
      </div>

    )
}
export default Main;