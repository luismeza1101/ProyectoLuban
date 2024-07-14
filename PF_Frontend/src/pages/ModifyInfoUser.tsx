import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../context/Contexto"
import '../StyleSheets/ModifyInfoUser.css'
import { modifyUser } from "../../../PF_Backend/api"
import { getUserData } from "../fuctions"

const ModifyInfoUser = () => {
  const productContext = useContext(ProductContext)
  
  if(!productContext){
    return
  }

  const {setIsModifyOpen, userData, setUserData, setIsLogged} = productContext
  const [newName, setNewName] = useState('');
  const [newCountry, setNewCountry] = useState('');
  const [newAdrees, setNewAdrees] = useState('');
  const id = userData?.id

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const handleSubmit = async () => {
    try {
      await modifyUser(id, newName, newAdrees, newCountry);
    } catch (error) {
      console.error(error);
      alert('Failed to update user');
    }
    setIsModifyOpen(false)
  };

  useEffect(() => {
    getUserData(setUserData, setIsLogged)
  },[setUserData])

  return (
    <div className="modalModifyOverlay">
      <div className="modalModify container">
          <h5 className="modalModify__titulo">Tu Cuenta</h5>
          <p className="modalModify__actu">Actualiza tu información</p>
          <form className="formModify" >
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" required onChange={(e) => setNewName(e.target.value)}/>
            <label htmlFor="pais">Pais</label>
            <input type="text" id="pais" required onChange={(e) => setNewCountry(e.target.value)}/>
            <label htmlFor="direccion">Dirección</label>
            <input type="text" id="direccion" required onChange={(e) => setNewAdrees(e.target.value)}/>
            <button type="submit" onClick={handleSubmit} className="btn btn-dark">Guardar Cambios</button>
          </form>
          <i
              className="bi bi-x-lg modalModify__close"
              onClick={() => setIsModifyOpen(false)}
          ></i>
      </div>
    </div>
  )
}

export default ModifyInfoUser
