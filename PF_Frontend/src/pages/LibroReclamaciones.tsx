import '../StyleSheets/LibroReclamaciones.css'

const LibroReclamaciones = () => {
  return (
    <div className="containerLibro">
        <div className="header">
            <h2>LIBRO DE RECLAMACIONES</h2>
            <h3>SU EMPRESA</h3>
            <p>RUC: 20000000104</p>
            <p>GERENTE GENERAL: JUAN LOPEZ</p>
        </div>
        
        <div className="form-group">
            <label htmlFor="establecimiento" >Establecimiento</label>
            <input type="text" id="establecimiento" name="establecimiento"/>
        </div>

        <h3 className="section-title">1. IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE</h3>
        <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre"/>
        </div>
        <div className="form-group">
            <div className="half-width">
                <label htmlFor="apellidoPaterno">Apellido Paterno</label>
                <input type="text" id="apellidoPaterno" name="apellidoPaterno"/>
            </div>
            <div className="half-width">
                <label htmlFor="apellidoMaterno">Apellido Materno</label>
                <input type="text" id="apellidoMaterno" name="apellidoMaterno"/>
            </div>
            <div className="clear"></div>
        </div>
        <div className="form-group">
            <label htmlFor="direccion">Dirección</label>
            <input type="text" id="direccion" name="direccion"/>
        </div>
        <div className="form-group">
            <div className="half-width">
                <label htmlFor="tipoDocumento">Tipo Documento Identidad</label>
                <select id="tipoDocumento" name="tipoDocumento">
                    <option value="dni">DNI</option>
                    <option value="pasaporte">Pasaporte</option>
                    <option value="carnetExtranjeria">Carnet de Extranjería</option>
                </select>
            </div>
            <div className="half-width">
                <label htmlFor="numeroDocumento">Número Documento Identidad</label>
                <input type="text" id="numeroDocumento" name="numeroDocumento"/>
            </div>
            <div className="clear"></div>
        </div>
        <div className="form-group">
            <div className="half-width">
                <label htmlFor="telefono">Teléfono</label>
                <input type="text" id="telefono" name="telefono"/>
            </div>
            <div className="half-width">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"/>
            </div>
            <div className="clear"></div>
        </div>
        <div className="form-group">
            <label htmlFor="edad">Edad</label>
            <input type="number" id="edad" name="edad"/>
        </div>

        <h3 className="section-title">2. IDENTIFICACIÓN DEL BIEN CONTRATADO</h3>
        <div className="form-group">
            <label htmlFor="productoServicio">Producto o Servicio</label>
            <input type="text" id="productoServicio" name="productoServicio"/>
        </div>
        <div className="form-group">
            <div className="half-width">
                <label htmlFor="moneda">Moneda</label>
                <select id="moneda" name="moneda">
                    <option value="pen">S/.</option>
                    <option value="usd">$</option>
                </select>
            </div>
            <div className="half-width">
                <label htmlFor="importe">Importe</label>
                <input type="text" id="importe" name="importe"/>
            </div>
            <div className="clear"></div>
        </div>
    </div>
  )
}

export default LibroReclamaciones
