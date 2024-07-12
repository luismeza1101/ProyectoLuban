import { Link } from "react-router-dom";

const RegisterUser = () => {
  return (
    <>
      <li className="lista__item lista__item--account">
          <Link to={"/sign-in"} className="links__link">
            Iniciar Sesión
          </Link>
        </li>
        <li className="lista__item lista__item--account">
          <Link to={"/sign-up"} className="links__link">
            Registrate
          </Link>
        </li>
    </>
  )
}

export default RegisterUser
