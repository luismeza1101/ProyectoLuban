import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CarShoping from "./pages/CarShoping";
import AboutUs from "./pages/AboutUs";
import InicioSesion from "./pages/InicioSesion";
import { ProductContext, ProductProvider } from "./context/Contexto";
import Pagos from "./pages/Pagos";
import LibroReclamaciones from "./pages/LibroReclamaciones";
import DataProductos from "./pages/DataProductos";
import DataProductosOfertas from "./pages/DataProductosOfertas";
import Register from "./pages/Register";
import { useContext, useEffect } from "react";
import { getUserData } from "./fuctions";

function App() {

  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const {setUserData, setIsLogged} = productContext;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserData(setUserData, setIsLogged); // Si hay un token almacenado, intenta obtener los datos del usuario
    }
  }, []);

  return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/carShop" element={<CarShoping />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/product/:id" element={<DataProductos/>} />
          <Route path="/oferta/:id" element={<DataProductosOfertas/>} />
          <Route path="/sign-in" element={<InicioSesion/>} />
          <Route path="/sign-up" element={<Register/>} />
          <Route path="/pago" element={<Pagos />} />
          <Route path="/libroReclamaciones" element={<LibroReclamaciones />} />
        </Routes>
  );
}

export default App;
