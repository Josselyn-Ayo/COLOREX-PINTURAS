import { Link } from "react-router-dom";
function Header(){
    return(
  <header className="header">
    <div className="header-container">
      <div className="logo">
        <Link to="/index">
            <img className="colorex" src="../../public/images/logo/logo-colorex.png" alt="Colorex" /> </Link>
      </div>
      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Search anything..." className="search-input"/>
        </div>
      </div>
      <div className="top-bar">
        <div className="icon-circle"><i className="fas fa-history"></i></div>
        <div className="icon-circle"><i className="fas fa-heart"></i></div>
        <div className="icon-circle"><i className="fas fa-user"></i></div>
        <div className="login-info">
          <span>BIENVENIDO</span>
          <span> <Link className="user" to="/login">INICIAR SESIÓN</Link> / <Link  className="user" to="/register">REGISTRARSE</Link></span>
        </div>
        <div className="cart">
          <div className="icon-circle">
            <i className="fas fa-shopping-bag"></i>
            <div className="badge">5</div>
          </div>
          <div className="cart-info">
            <span>CARRITO</span>
            <span>$1,689.00</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
  }
  export default Header;

