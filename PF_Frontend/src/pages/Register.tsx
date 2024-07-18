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


  const limpiarCampos = () =>{
    setName('')
    setAdrees('')
    setCountry('')
    setEmail('')
    setPassword('')
  }
  const handleRegisters = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await registerUser(
        name,
        country,
        adrees,
        email,
        password
      );
      setMessage(response.message);
      limpiarCampos();
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
    <div className="register-container">
      <div className="register-form">
        <div className="register-form__info">
          <h2>Bienvenido</h2>
          <p>
            ¡Bienvenido a nuestro sitio! Estamos encantados de tenerte con
            nosotros. Regístrate ahora para acceder a todas nuestras increíbles
            funcionalidades y ofertas exclusivas. ¡Es rápido y fácil! Únete a
            nuestra comunidad hoy mismo.
          </p>
        </div>

        <form onSubmit={handleRegisters} className="register-form__data">
          <p className="register-form__section">
            <label htmlFor="name">Nombre</label>
            <input
              className="register-form__input"
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </p>
          <p className="register-form__section">
            <label htmlFor="country">País</label>
            <input
              className="register-form__input"
              type="text"
              id="country"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              required
            />
          </p>
          <p className="register-form__section">
            <label htmlFor="address">Dirección</label>
            <input
              className="register-form__input"
              type="text"
              id="address"
              onChange={(e) => setAdrees(e.target.value)}
              value={adrees}
              required
            />
          </p>
          <p className="register-form__section">
            <label htmlFor="email">Email</label>
            <input
              className="register-form__input"
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </p>
          <p className="register-form__section">
            <label htmlFor="password">Contraseña</label>
            <input
              className="register-form__input"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </p>
          <p className="register-form__section">
            <input className="btn btn-dark" type="submit" value="Registrarse" />
          </p>
          {message && <p>{message}</p>}
        </form>
      </div>
      <Link className="register-logo" to={"/"}>
        <img
          src="../../public/logo.png"
          alt="logo"
          className="register-logo__image"
        />
      </Link>
    </div>
  );
};

export default Register;
