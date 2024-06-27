import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CarShoping from "./pages/CarShoping";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import { ProductProvider } from "./context/Contexto";
import Pagos from "./pages/Pagos";
import LibroReclamaciones from "./pages/LibroReclamaciones";
import DataProductos from "./pages/DataProductos";
import DataProductosOfertas from "./pages/DataProductosOfertas";

function App() {

  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/carShop" element={<CarShoping />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/product/:id" element={<DataProductos/>} />
          <Route path="/oferta/:id" element={<DataProductosOfertas/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/pago" element={<Pagos />} />
          <Route path="/libroReclamaciones" element={<LibroReclamaciones />} />
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
