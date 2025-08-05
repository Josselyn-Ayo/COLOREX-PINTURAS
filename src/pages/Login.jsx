import { Link } from "react-router-dom";
import '../css/register.css'
import Header from '../component/Header';
import Main from '../component/Main';
import Footer from '../component/Footer';

function Login(){
    return(    
    <>
    <Header/>
    <Main/>
    <div className="container">
      <h2>Iniciar Sesión</h2>
      <p>Inicia sesión para acceder a tu cuenta de Colorex</p>
      <form>
        <div className="input-box">
          <label>Correo Electrónico <span className="required">*</span></label>
          <input type="email" required/>
        </div>
        <div className="input-box">
          <label>Contraseña <span className="required">*</span></label>
          <input type="password" required/>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="terms"/>
          <label for="terms">Recuérdame<a className="forgot-password" href="#">Olvidaste la contraseña</a></label>
        </div>
        <button type="submit">INICIAR SESIÓN</button>
      </form>
      <p className="login-text">¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
      <hr /> 
      <p className="alt-text">Iniciar con</p>
      <div class="social-buttons">
        <button className="facebook"><img src="images/icons/facebook.png" alt="" /></button> 
        <button className="google"><img src="images/icons/google.png" alt="" /></button>
        <button className="apple"><img src="images/icons/apple.png" alt="" /></button>
      </div>
    </div>
    <Footer/>
    
    </>
    

    );
}
export default Login;