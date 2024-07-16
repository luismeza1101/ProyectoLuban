import "../StyleSheets/Login.css"; 
import { useState, useContext } from "react";
import { signIn } from "../../../PF_Backend/api";
import { ProductContext } from "../context/Contexto";
import { getUserData } from "../fuctions";

const Login: React.FC = () => {
  // Estados para almacenar los datos del usuario
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const {setUserData, setIsLogged} = productContext;

  // Funcion para registrar nuevos usuarios
  const handleSignup = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    try {
      const response = await signIn(email, password);
      setMessage(response.message);
      await getUserData(setUserData, setIsLogged);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setMessage("Error al iniciar sesión");
    }
  };


  return (
    <>
      <div className="containerLogin">
        <div className="form-container">
          <div className="login-container">
            <h2>Bienvenido</h2>
            <p>Inicie Sesión</p>

            <form
              onSubmit={handleSignup}
            >
              <p>
                <label>Username</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </p>

              <p>
                <label>Password</label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </p>
              <p>
                <input
                  className="btn btn-login"
                  type="submit"
                  value="Iniciar sesión"
                />
              </p>
              {message && <p>{message}</p>}
            </form>
          </div>
          <div className="welcome-screen-container"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
