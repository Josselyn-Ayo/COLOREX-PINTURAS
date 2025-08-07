import { Link } from "react-router-dom";
import { useCart } from './context/CartContext'; // ajusta la ruta según tu estructura

function Header() {
    const { carrito } = useCart();
    const { valorTotal } = useCart();


  const totalItems = carrito.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
           <div className="logo">
              <Link to="/index">
                <img className="colorex" src="/images/logo/Logo-colorex.png" alt="Colorex" /> 
              </Link>
          </div>
        </div>

        <div className="search-container">
          <div className="search-bar">
            <input type="text" placeholder="Search anything..." className="search-input" />
          </div>
        </div>

        <div className="top-bar">
          <div className="icon-circle"><i className="fas fa-history"></i></div>
          <div className="icon-circle"><i className="fas fa-heart"></i></div>
          <div className="icon-circle"><i className="fas fa-user"></i></div>

          <div className="login-info">
            <span>BIENVENIDO</span>
            <span>
              <Link className="user" to="/login">INICIAR SESIÓN</Link> /{" "}
              <Link className="user" to="/register">REGISTRARSE</Link>
            </span>
          </div>

          <div className="cart">
            <Link to="/carrito">
              <div className="icon-circle">
                <i className="fas fa-shopping-bag"></i>
                <div className="badge">{totalItems}</div>
              </div>
            </Link>
            <Link>
            <div className="cart-info">
              <span>CARRITO</span>
              <span>${valorTotal ? valorTotal.toFixed(2) : '0.00'}</span>
            </div>
            </Link>
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
