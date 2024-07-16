import { Preguntas, Reseñas } from "./types";


//Para agregar mas preguntas el objeto debe tener un index, que sera su numero de orden en ingles, la pregunta y la respuesta en ese orden
export const preguntasFrecuentes: Preguntas[] = [
  {
    index: "One",
    pregunta: "¿Cómo puedo realizar un pedido?",
    respuesta:
      "Para realizar un pedido, simplemente navega por nuestro catálogo en línea y agrega los productos que deseas a tu carrito. Luego, completa el proceso de compra proporcionando tu información de envío y pago.",
  },
  {
    index: "Two",
    pregunta: "¿Cuál es el tiempo de entrega",
    respuesta:
      "El tiempo de entrega puede variar según tu ubicación y el método de envío seleccionado. Por lo general, los pedidos se entregan en un plazo de 3 a 5 días hábiles. Si necesitas una entrega más rápida, puedes seleccionar un servicio de envío express.",
  },
  {
    index: "Three",
    pregunta: "¿Cómo puedo hacer un seguimiento del pedido?",
    respuesta:
      "Puedes hacer un seguimiento de tu pedido iniciando sesión en tu cuenta en nuestro sitio web. Allí encontrarás información sobre el estado de tu envío, incluyendo la fecha de entrega estimada.",
  },
  {
    index: "Four",
    pregunta: "¿Cuál es la politica de devoluciones",
    respuesta:
      "Aceptamos devoluciones de productos dentro de los 30 días posteriores a la compra. Los artículos deben estar en perfecto estado y con su empaque original. Puedes solicitar una devolución a través de tu cuenta en línea o contactando a nuestro equipo de atención al cliente.",
  },
];

//Para la seccion de comentarios de los clientes 

export const reseñasClientes: Reseñas[] = [
  {
    nombre: 'Alfonso Quispe',
    descripcion: 'Compré un sofá y una mesa de comedor y estoy encantada con la calidad y el diseño. El servicio al cliente fue excelente y la entrega rápida. ¡Recomiendo esta tienda a todos!',
    imagen: ""
  },
  {
    nombre: 'Carlos Manzique',
    descripcion: 'Los muebles que adquirí superaron mis expectativas. Son cómodos, modernos y se ven increíbles en mi sala. Además, el proceso de compra fue sencillo. ¡Volveré a comprar sin duda!',
    imagen: ""
  },
  {
    nombre: 'Ana Diaz',
    descripcion: 'He renovado mi dormitorio con los muebles de esta tienda y no puedo estar más feliz. La calidad es insuperable y llegaron en perfectas condiciones. ¡Gracias por ayudarme a crear el hogar de mis sueños!',
    imagen: ""
  }
] 