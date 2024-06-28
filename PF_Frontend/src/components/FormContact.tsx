import { useState } from "react";
import "../StyleSheets/FormContact.css";

const FormContact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [text, setText] = useState("");

  const limpiarCampos = () => {
    setEmail(''),
    setAsunto('')
    setText('')
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: email,
          to: "tiendaluban@gmail.com",
          subject: asunto,
          text: `De : ${email} \n Mensaje: ${text}`,
        }),
      });

      if (response.ok) {
        alert("Correo enviado correctamente");
        limpiarCampos()
      } else {
        alert("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
   
  };

  

  return (
    // Formulario donde el usuario podra mandar sus quejas o dudas
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="form__titulo">Contactanos</h3>
      <span className="form__info">
        Si no encontraste la respuesta que buscabas, déjanos un mensaje y nos
        comunicaremos contigo a la brevedad
      </span>
      {/* Seccion donde estan los campos de nombre y correo electronico */}
      <div className="datosP">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Correo Electronico
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Sección donde se escribira el asunto del contacto del cliente */}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Asunto
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(e) => setAsunto(e.target.value)}
            placeholder="Asunto"
            required
          />
        </div>
      </div>
      {/* Seccion para describir lo que el cliente esta experimentando */}
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Mensaje
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          onChange={(e) => setText(e.target.value)}
          placeholder="Descripción"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-dark">
        Enviar
      </button>
    </form>
  );
};

export default FormContact;