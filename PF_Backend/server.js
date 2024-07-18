// Importaciones de los paquetes que necesitamos
const express = require("express"); // Framework para crear paginas web y APIS mas rapido
const mysql = require("mysql2"); // Conectar con la base de datos
const cors = require("cors"); // Permite que tu servidor acepte solicitudes de recursos desde dominios diferentes al propio
const bodyParser = require("body-parser"); // Middleware que se usa para analizar los cuerpos de las solicitudes entrantes en diferentes formatos
const nodemailer = require("nodemailer"); // Enviar correos electrónicos desde tu aplicación
const bcrypt = require("bcryptjs"); //Hashing de contraseñas
const { v4: uuidv4 } = require("uuid"); // Generar IDs aleatorias
const jwt = require("jsonwebtoken"); // Generar y verificar tokens de sesión
const app = express();
const port = 3001;

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "wY8$%jP!2@Fq",
  database: "tienda_luban",
});

// Conectar a la base de datos
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
    return;
  }
  console.log("Connected to the MySQL database.");
});

// Configuracion de middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Middleware para verificar el token
function verifyToken(req, res, next) {
  // Obtener el token desde los headers de la solicitud
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    // Formato del token: Bearer <token>
    const bearerToken = bearerHeader.split(" ")[1];

    // Verificar el token usando la clave secreta
    jwt.verify(bearerToken, "secret_key", (err, decoded) => {
      if (err) {
        // Si hay un error en la verificación del token
        console.error("Error en verificación de token:", err);
        res.sendStatus(403); // Forbidden
      } else {
        // Si la verificación es exitosa, guardar el ID del usuario en la solicitud
        req.user = decoded;
        next(); // Continuar con la solicitud
      }
    });
  } else {
    // Si no se proporcionó un token en los headers
    res.sendStatus(401); // Unauthorized
  }
}

// Middleware para validar datos de entrada
function validateUserData(req, res, next) {
  const { id, nombre, pais, direccion } = req.body;
  if (!id || !nombre || !pais || !direccion) {
    return res.status(400).json({ message: "All fields are required" });
  }
  next();
}

app.put("/api/modifyUser", validateUserData, (req, res) => {
  const { id, nombre, direccion, pais } = req.body;
  const query =
    "UPDATE Clientes SET nombre = ?, pais = ?, direccion = ? WHERE id = ?";

  connection.query(query, [nombre, pais, direccion, id], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Database error", error: err.message });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User updated successfully" });
  });
});

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'tiendaluban@gmail.com',
    pass: 'egso lrxf cfvz smcw', 
  },
});



// Endpoint para registrar usuarios
app.post("/api/register", async (req, res) => {
  const { name, country, adrees, email, password } = req.body;

  if (!name || !adrees || !country || !password || !email) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  try {
    // Generar un hash de la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generar un UUID para el id
    const id = uuidv4();

    const insertQuery =
      "INSERT INTO Clientes (id, nombre, pais, direccion, email, contraseña) VALUES (?, ?, ?, ?, ?, ?)";
    connection.query(
      insertQuery,
      [id, name, country, adrees, email, hashedPassword],
      (err, result) => {
        if (err) {
          console.error("Error al guardar usuario:", err);
          return res
            .status(500)
            .json({
              message: "Error interno del servidor",
              error: err.message,
            });
        }
        res.status(200).json({ message: "Usuario registrado correctamente" });
      }
    );
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

// Endpoint para iniciar sesión
app.post("/api/signIn", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email y contraseña son requeridos" });
  }

  const query = "SELECT contraseña, email, id FROM Clientes WHERE email = ?";
  connection.query(query, [email], async (error, results) => {
    if (error) {
      console.error("Error al verificar usuario:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: "Usuario no encontrado" });
    }

    const user = results[0];

    if (!user.contraseña) {
      return res
        .status(500)
        .json({ message: "El usuario no tiene una contraseña establecida" });
    }

    // Verificar la contraseña
    try {
      const isPasswordValid = await bcrypt.compare(password, user.contraseña);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }
    } catch (err) {
      console.error("Error al comparar las contraseñas:", err);
      return res.status(500).json({ message: "Error interno del servidor" });
    }

    // Generar un token de sesión
    const token = jwt.sign({ id: user.id }, "secret_key", { expiresIn: "1h" });

    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  });
});

// Endpoint para obtener datos del usuario autenticado
app.get("/api/user/data", verifyToken, async (req, res) => {
  const userId = req.user.id; // ID del usuario obtenido del token

  const query =
    "SELECT id, nombre, pais, direccion, email FROM Clientes WHERE id = ?";
  connection.query(query, [userId], (error, results) => {
    if (error) {
      console.error("Error al obtener datos del usuario:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Obtener los datos del primer resultado (suponiendo que id es único)
    const userData = results[0];

    // Aquí defines qué datos del usuario quieres devolver en la respuesta
    const responseData = {
      id: userData.id,
      name: userData.nombre,
      country: userData.pais,
      adrees: userData.direccion,
      email: userData.email,
    };

    res.status(200).json(responseData);
  });
});

// Función para enviar correo electrónico
const sendMail = async (from, to, subject, text) => {
  try {
    // Enviar el correo con el transporte configurado
    const info = await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: text,
    });
    console.log("Correo enviado:", info.messageId);
    return info;
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    throw error;
  }
};

// Endpoint para enviar correo electrónico desde el formulario de contacto
app.post("/api/send-email", async (req, res) => {
  const { from, to, subject, text } = req.body;

  // Verifica que todos los campos necesarios estén presentes
  if (!from || !to || !subject || !text) {
    return res
      .status(400)
      .json({ message: "Los campos to, subject y text son obligatorios" });
  }

  try {
    await sendMail(from, to, subject, text);
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ message: "Error" });
  }
});

// Endpoint para obtener todos los productos
app.get("/api/products", (req, res) => {
  const query = "SELECT * FROM Productos";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error al obtener los productos:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
    res.status(200).json(results);
  });
});

// Endpoint para obtener información de cada producto
app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM Productos WHERE id = ?";
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error("Error al obtener el producto:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json(results[0]);
  });
});

// Endpoint para obtener la informacion de los productos en oferta
app.get("/api/oferta", (req, res) => {
  const query = "SELECT * FROM Ofertas";
  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error al obtener los productos:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
    res.status(200).json(results);
  });
});

// Endpoint para obtener información de cada producto en oferta
app.get("/api/oferta/:id", (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM Ofertas WHERE id = ?";
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error("Error al obtener el producto:", error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.status(200).json(results[0]);
  });
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
