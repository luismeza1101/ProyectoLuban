// Importaciones de los paquetes que necesitamos
const express = require('express'); // Framework para crear paginas web y APIS mas rapido
const mysql = require('mysql2'); // Conectar con la base de datos
const cors = require('cors'); // Permite que tu servidor acepte solicitudes de recursos desde dominios diferentes al propio
const bodyParser = require('body-parser'); // Middleware que se usa para analizar los cuerpos de las solicitudes entrantes en diferentes formatos 
const nodemailer = require('nodemailer'); // Enviar correos electrónicos desde tu aplicación 
const app = express();
const port = 3001;

// Permitir CORS para evitar problemas con las peticiones desde el frontend
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Configurar nodemailer con tus credenciales de correo electrónico
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "tiendaluban@gmail.com",
    pass: "egso lrxf cfvz smcw",
  },
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
app.post('/api/send-email', async (req, res) => {
  const { from, to, subject, text} = req.body;

  // Verifica que todos los campos necesarios estén presentes
  if (!from || !to || !subject || !text ) {
    return res.status(400).json({ message: 'Los campos to, subject y text son obligatorios' });
  }

  try {
    await sendMail(from, to, subject, text);
    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ message: 'Error interno al enviar el correo' });
  }
}); 

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'wY8$%jP!2@Fq', 
  database: 'tienda_luban' 
});

// Conectar a la base de datos
connection.connect(error => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the MySQL database.');
});


// Endpoint para guardar los datos de inicio de sesión
app.post('/api/signup', (req, res) => {
  const { password, email } = req.body;

  if (!password || !email) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  const insertQuery = 'INSERT INTO Clientes (contraseña, email) VALUES (?, ?)';
  connection.query(insertQuery, [password, email], (err, result) => {
    if (err) {
      console.error('Error al guardar usuario:', err); // Imprime el error en la consola del servidor
      return res.status(500).json({ message: 'Error interno del servidor', error: err.message }); // Devuelve el mensaje de error al cliente
    }
    res.status(200).json({ message: 'Usuario registrado correctamente' });
  });
});

// Endpoint para obtener todos los productos
app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM Productos';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener los productos:', error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
    res.status(200).json(results);
  });
});

// Endpoint para obtener información de cada producto
app.get('/api/products/:id', (req, res) => {
  const id = req.params.id; 
  const query = 'SELECT * FROM Productos WHERE id = ?';
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error al obtener el producto:', error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(results[0]);
  });
});


// Endpoint para obtener la informacion de los productos en oferta
app.get('/api/oferta', (req, res) =>{
  const query = 'SELECT * FROM Ofertas';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener los productos:', error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
    res.status(200).json(results);
  });
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Endpoint para obtener información de cada producto en oferta
app.get('/api/oferta/:id', (req, res) => {
  const id = req.params.id; 
  const query = 'SELECT * FROM Ofertas WHERE id = ?';
  connection.query(query, [id], (error, results) => {
    if (error) {
      console.error('Error al obtener el producto:', error);
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(results[0]);
  });
});