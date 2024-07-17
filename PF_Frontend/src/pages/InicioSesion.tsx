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

  // Funcion para registrar nuevos usuarios
  const handleSignup = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      const response = await signIn(email, password);
      setMessage(response.message);
      await getUserData(setUserData, setIsLogged);
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
    <>
      <Link className="logo" to={'/'}>
        <img src="../../public/logo.png" alt="logo" className="logo__image" />
      </Link>
      <div className="containerLogin">
        <div className="formLogin">
            <h2>Bienvenido</h2>
            <p className="form--ligth">Inicie Sesión</p>

            <form onSubmit={handleSignup} className="loginData">
              <p className="loginData__section">
                <label>Username</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </p>

              <p className="loginData__section">
                <label>Password</label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </p>
              <p className="loginData__section">
                <input
                  className="btn btn-dark"
                  type="submit"
                  value="Iniciar sesión"
                />
              </p>
              {message && <p>{message}</p>}
            </form>
        </div>
      </div>
    </>
  );
};

export default InicioSesion;
