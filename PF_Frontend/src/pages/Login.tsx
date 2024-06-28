import "../StyleSheets/Login.css"; // Importar estilos CSS
import Footer from "../components/Footer";
import { signup } from "../../../PF_Backend/api";
import { useContext, useRef, useState } from "react";
import Header from "../components/Header";
import { ProductContext } from "../context/Contexto";

const Login: React.FC = () => {
  // Estados para almacenar los datos del usuario
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const user = useRef<HTMLInputElement>(null)

  // Funcion para registrar nuevos usuarios
  const handleSignup = async () => {
    try {
      const response = await signup(password, email);
      setMessage(response.message);
      // Lógica adicional después de registrar al usuario
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setMessage("Error al registrar usuario");
    }
  };

  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const { setUser } = productContext;

  return (
    <>
    <Header/>
      <div className="containerLogin">
        <div className="form-container">
          <div className="login-container">
            <h2>Bienvenido</h2>
            <p>Registrese</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSignup();
                setUser(user.current!.value)
              }}
            >
              <p>
                <label>Username</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  ref={user}
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

              <div className="options">
                <div>
                  Recuerdame <input type="checkbox" name="remeberme" id="" />
                </div>
              </div>

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
      <Footer />
    </>
  );
};

export default Login;
