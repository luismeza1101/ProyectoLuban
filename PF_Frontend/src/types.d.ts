// Estructura que tendra las preguntas frecuentes
export type Preguntas = {
    index: string;
    pregunta: string;
    respuesta: string;
  };

// Estructura de la informacion de cada producto 
export type Producto = {
  id : string
  nombre : string
  descripcion : string
  imagen : string
  price: number
  descuento: number
}

export interface Product {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria_id: number;
  imagen_url: string;
}

export type Mueble = {
  categoria_id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  stock: number;
  imagen_url: string;
}

export type MuebleOferta = Mueble & {
  descuento: number
}

export interface CarProduct {
  name: string
  price: number
}

export interface ProOferta{
  id: string,
  nombre: string,
  descripcion: string,
  precio: number,
  stock: number,
  descuento: number,
  imagen_url: string
}