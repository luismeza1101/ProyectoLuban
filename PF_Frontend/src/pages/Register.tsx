import "../StyleSheets/Login.css"; // Importar estilos CSS
import Footer from "../components/Footer";
import { registerUser } from "../../../PF_Backend/api";
import { useState } from "react";
import Header from "../components/Header";

const Register: React.FC = () => {
  // Estados para almacenar los datos del usuario
  const [name, setName] = useState("");
  const [adrees, setAdrees] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegisters = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await registerUser(name, country, adrees, email, password);
      setMessage(response.message);
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setMessage("Ya existe este usuario.");
    }
  };

  return (
    <>
    <Header/>
      <div className="containerLogin">
        <div className="form-container">
          <div className="login-container">
            {/* <h2>Bienvenido</h2>
            <p>Registrese</p> */}

            <form
              onSubmit={handleRegisters}
            >
              <p>
                <label>Nombre</label>
                <input
                  className="input"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </p>
              <p>
                <label>Pais</label>
                <input
                  className="input"
                  type="text"
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </p>
              <p>
                <label>Direccion</label>
                <input
                  className="input"
                  type="text"
                  onChange={(e) => setAdrees(e.target.value)}
                  required
                />
              </p>
              <p>
                <label>Email</label>
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
{/* 
              <div className="options">
                <div>
                  Recuerdame <input type="checkbox" name="remeberme" id="" />
                </div>
              </div> */}

              <p>
                <input
                  className="btn btn-login"
                  type="submit"
                  value="Registrarse"
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

export default Register;
