import { Link } from "react-router-dom";
import '../css/register.css'
import Header from '../component/Header';
import Main from '../component/Main';
import Footer from '../component/Footer';
function Register(){
    return(
       <>
    <Header/>
    <Main/>
    <div className="container">
      <h2>Registrarse</h2>
      <p>Vamos a prepararte para que puedas acceder a tu cuenta personal.</p>
      <form>
        <div className="row">
          <div className="input-box">
            <label>Nombre <span class="required">*</span></label>
            <input type="text" required/>
          </div>
          <div className="input-box">
            <label>Apellido <span className="required">*</span></label>
            <input type="text" required/>
          </div>
        </div>
        <div className="input-box">
          <label>Correo Electrónico <span className="required">*</span></label>
          <input type="email" required/>
        </div>
        <div className="input-box">
          <label>Teléfono <span className="opcional">(Opcional)</span></label>
          <input type="tel"/>
        </div>
        <div className="input-box">
          <label>Ciudad / Región <span className="required">*</span></label>
          <select required>
            <option value="ecuador">Ecuador (ECU)</option>
           
          </select>
        </div>
        <div className="input-box">
          <label>Contraseña <span className="required">*</span></label>
          <input type="password" required/>
        </div>
        <div className="input-box">
          <label>Confirmar Contraseña <span className="required">*</span></label>
          <input type="password" required/>
        </div>
        <div className="checkbox">
          <input type="checkbox" id="terms"/>
          <label htmlFor="terms">Acepto todos los <a class="terms-blue" href="#">Términos y Políticas de Privacidad</a></label>
        </div>
        <button type="submit">CREAR CUENTA</button>
      </form>
      <p className="login-text">¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link></p>
      <hr/>
      <p className="alt-text">Regístrate con</p>
      <div className="social-buttons">
        <button className="facebook"><img src="images/icons/facebook.png" alt=""/></button>
        <button className="google"><img src="images/icons/google.png" alt=""/></button>
        <button className="apple"><img src="images/icons/apple.png" alt=""/></button>
      </div>
    </div>
    <Footer/>
   </>


    );
} 
export default Register;