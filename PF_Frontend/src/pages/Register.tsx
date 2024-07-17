import "../StyleSheets/Register.css"; 
import { registerUser } from "../../../PF_Backend/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="registerLogin">
        <div className="form__register">
            <h2>Bienvenido</h2>
            <p>Registrese</p>

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
                <label>Contraseña</label>
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
                  className="btn btn-dark"
                  type="submit"
                  value="Registrarse"
                />
              </p>
              {message && <p>{message}</p>}
            </form>
          </div>
      </div>
    </>
  );
};

export default Register;
