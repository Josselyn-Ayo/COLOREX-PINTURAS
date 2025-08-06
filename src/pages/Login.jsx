import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authFirebase, dbFirebase } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import Header from "../component/Header";
import Main from "../component/Main";
import Footer from "../component/Footer";
import "../css/register.css";
import { CartContext } from '../CartContext';

function Login() {
  const { carrito, carritoInfo } = useContext(CartContext); // Contexto del carrito
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;

    try {
      const userCredential = await signInWithEmailAndPassword(authFirebase, email, password);
      const user = userCredential.user;

      // Obtener datos adicionales del usuario en Firestore
      const userDocRef = doc(dbFirebase, "users", user.uid);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const { rol } = userSnap.data();

        // Redirección según rol
        if (rol === "admin") navigate("/adminDashboard");
        else if (rol === "cajero") navigate("/cajero");
        else navigate("/index");
      } else {
        navigate("/index"); // Usuario común
      }

    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Correo o contraseña incorrectos");
    }
  };

  return (
    <>
      <Header carrito={carrito} carritoInfo={carritoInfo} />
      <Main />
      <div className="container">
        <h2>Iniciar Sesión</h2>
        <p>Inicia sesión para acceder a tu cuenta de Colorex</p>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="input-box">
            <label>Correo Electrónico <span className="required">*</span></label>
            <input type="email" {...register("email", { required: true })} />
            {errors.email && <span className="error">Correo requerido</span>}
          </div>

          <div className="input-box">
            <label>Contraseña <span className="required">*</span></label>
            <input type="password" {...register("password", { required: true })} />
            {errors.password && <span className="error">Contraseña requerida</span>}
          </div>

          <div className="checkbox">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">
              Recuérdame
              <a className="forgot-password" href="#">Olvidaste la contraseña</a>
            </label>
          </div>

          <button type="submit">INICIAR SESIÓN</button>
        </form>

        <p className="login-text">
          ¿No tienes una cuenta? <Link to="/register">Regístrate</Link>
        </p>

        <hr />
        <p className="alt-text">Iniciar con</p>
        <div className="social-buttons">
          <button className="facebook"><img src="images/icons/facebook.png" alt="Facebook" /></button>
          <button className="google"><img src="images/icons/google.png" alt="Google" /></button>
          <button className="apple"><img src="images/icons/apple.png" alt="Apple" /></button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
