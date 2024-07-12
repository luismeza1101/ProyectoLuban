import { fetchWithAuth } from "../../PF_Backend/api";
import { CarProduct, User } from "./types";

// Funcion para aumentar la cantidad de productos
export const increaseCant = (
  minCant: number,
  setMinCant: React.Dispatch<React.SetStateAction<number>>
) => {
  if (minCant == 5) {
    alert("Solo puedes comprar un maximo de 9 productos");
  } else {
    setMinCant(minCant + 1);
  }
};

// Funcion para disminuir la cantidad de productos
export const decreaseCant = (
  minCant: number,
  setMinCant: React.Dispatch<React.SetStateAction<number>>
) => {
  if (minCant == 1) {
    alert("Debes comprar como minimo un producto");
  } else {
    setMinCant(minCant - 1);
  }
};

// Funcion para cargar la imagen de cada producto
export const getImage = (imageName: string, categoria: number) => {
  try {
    let cat = "";
    switch (categoria) {
      case 1:
        cat = "cocina/";
        break;
      case 2:
        cat = "dormitorio/";
        break;
      case 3:
        cat = "sala/";
        break;
      case 4:
        cat = "baño/";
        break;
    }
    // return `../../public/FotosMuebles/${cat}${imageName}`;
    return `/FotosMuebles/${cat}${imageName}`; // Funciona en produccion
  } catch (err) {
    console.error(`Error al cargar la imagen: ${imageName}`, err);
    return undefined;
  }
};
// Funcion para añadir al carrito
export const addCar = (
  price: number,
  productCar: CarProduct[],
  setProductCar: (productCar: CarProduct[]) => void,
  setPagoTotal: (monto: number) => void,
  pagoTotal: number,
  name: string
) => {
  let newPrice = price.toString();
  setProductCar([...productCar, { name: name, price: price }]);
  alert("Producto añadido al carrito");
  setPagoTotal(pagoTotal + parseFloat(newPrice));
};

//Obtener datos del usuario
export const getUserData = async (setUserData: (data: User) => void, setIsLogged: (logged: boolean) => void) => {
  try {
    const response = await fetchWithAuth();
    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    const data = await response.json();
    setUserData(data);
    setIsLogged(true);
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
};
