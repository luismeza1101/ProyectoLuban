import "../StyleSheets/InicioSesion.css";
import { useState, useContext, useEffect } from "react";
import { signIn } from "../../../PF_Backend/api";
import { ProductContext } from "../context/Contexto";
import { getUserData } from "../fuctions";
import { Link } from "react-router-dom";

const InicioSesion: React.FC = () => {
  // Estados para almacenar los datos del usuario
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const { setUserData, setIsLogged } = productContext;

  const limpiarCampos = () =>{
    setEmail('')
    setPassword('')
  }

  // Funcion para registrar nuevos usuarios
  const handleSignup = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      const response = await signIn(email, password);
      setMessage(response.message);
      await getUserData(setUserData, setIsLogged);
      limpiarCampos()
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setMessage("Error al iniciar sesión");
    }
  };
  // UseEffect para hacer que el mensaje desaparezca después de 4 segundos
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    
  <div className="login-container">
    <div className="login-form">
        <div className="login-form__text">
          <h2>Bienvenido</h2>
          <p className="login-form__subtitle">¡Hola de nuevo! Inicia sesión para acceder a tu cuenta y disfrutar de una gran experiencia.</p>
        </div>

        <form onSubmit={handleSignup} className="login-form__data">
          <div className="login-form__info">
            <h3>Inicie Sesión</h3>
            <span>Si no tiene una cuenta, create una</span>
          </div>
          <div className="login-form__section">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              className="login-form__input"
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className="login-form__section">
            <label htmlFor="password">Contraseña</label>
            <input
              className="login-form__input"
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>
          <div className="login-form__section">
            <input
              className="btn btn-dark"
              type="submit"
              value="Iniciar sesión"
            />
            <Link to={'/sign-up'}>Crear cuenta</Link>
          </div>
          {message && <p>{message}</p>}
        </form>
    </div>
  <Link className="register-logo" to={'/'}>
    <img src="../../public/logo.png" alt="logo" className="register-logo__image" />
  </Link>
  </div>


  );
};

export default InicioSesion;
