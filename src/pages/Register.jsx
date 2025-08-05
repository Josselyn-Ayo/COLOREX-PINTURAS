import { Link, useNavigate } from "react-router-dom";
import "../css/register.css";
import Header from "../component/Header";
import Main from "../component/Main";
import Footer from "../component/Footer";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authFirebase, dbFirebase } from "../firebase";
import { setDoc, doc } from "firebase/firestore";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { email, password, name, apellido, telefono, ciudad } = data;

    try {
      await createUserWithEmailAndPassword(authFirebase, email, password);
      const user = authFirebase.currentUser;

      if (user) {
        await setDoc(doc(dbFirebase, "users", user.uid), {
          nombre: name,
          apellido: apellido,
          email: email,
          telefono: telefono || "", // por si no pone nada
          ciudad: ciudad,
        });
      }

      alert("Usuario registrado correctamente");
      navigate("/login");
    } catch (error) {
      console.error("Error al registrar:", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <>
      <Header />
      <Main />
      <div className="container">
        <h2>Registrarse</h2>
        <p>Vamos a prepararte para que puedas acceder a tu cuenta personal.</p>

        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="row">
            <div className="input-box">
              <label>Nombre <span className="required">*</span></label>
              <input type="text" {...register("name", { required: "Nombre requerido" })} />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className="input-box">
              <label>Apellido <span className="required">*</span></label>
              <input type="text" {...register("apellido", { required: "Apellido requerido" })} />
              {errors.apellido && <p className="error">{errors.apellido.message}</p>}
            </div>
          </div>

          <div className="input-box">
            <label>Correo Electrónico <span className="required">*</span></label>
            <input type="email" {...register("email", { required: "Correo requerido" })} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="input-box">
            <label>Teléfono <span className="opcional">(Opcional)</span></label>
            <input type="tel" {...register("telefono")} />
          </div>

          <div className="input-box">
            <label>Ciudad / Región <span className="required">*</span></label>
            <select {...register("ciudad", { required: "Selecciona una ciudad" })}>
              <option value="">-- Selecciona una opción --</option>
              <option value="ecuador">Ecuador (ECU)</option>
            </select>
            {errors.ciudad && <p className="error">{errors.ciudad.message}</p>}
          </div>

          <div className="input-box">
            <label>Contraseña <span className="required">*</span></label>
            <input
              type="password"
              {...register("password", {
                required: "Contraseña requerida",
                minLength: {
                  value: 6,
                  message: "Mínimo 6 caracteres",
                },
              })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <div className="input-box">
            <label>Confirmar Contraseña <span className="required">*</span></label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Confirma tu contraseña",
                validate: (value) => value === watch("password") || "Las contraseñas no coinciden",
              })}
            />
            {errors.confirmPassword && (
              <p className="error">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="checkbox">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              Acepto todos los <a className="terms-blue" href="#">Términos y Políticas de Privacidad</a>
            </label>
          </div>

          <button type="submit">CREAR CUENTA</button>
        </form>

        <p className="login-text">
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
        </p>

        <hr />
        <p className="alt-text">Regístrate con</p>
        <div className="social-buttons">
          <button className="facebook"><img src="images/icons/facebook.png" alt="" /></button>
          <button className="google"><img src="images/icons/google.png" alt="" /></button>
          <button className="apple"><img src="images/icons/apple.png" alt="" /></button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;
