import { Preguntas, Producto } from "./types";


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

// Data de los productos mas vendidos para agregar

export const productsMasVendidos: Producto[] = [
  {
    nombre: 'SALA',
    id : crypto.randomUUID(),
    descripcion : 'Mueble para sala de casa: Moderno soporte para televisión en madera de nogal, con espacio amplio para equipos electrónicos y almacenamiento oculto para organizar cables. Diseñado para complementar cualquier estilo de decoración, ofreciendo funcionalidad y elegancia en el centro de entretenimiento del hogar',
    imagen : './sala.jpg',
    price : 599.99,
    descuento: 20
  },
  {
    nombre: 'DORMITORIO',
    id : crypto.randomUUID(),
    descripcion : 'Cama para dormitorio: Cómoda cama queen-size con cabecera acolchada en tela beige, estructura de madera sólida de roble y patas elegantes. Perfecta para crear un ambiente acogedor y relajante en cualquier dormitorio, combinando confort y estilo atemporal.',
    imagen : './dormitorio.jpg',
    price : 699.99,
    descuento: 40
  },
  {
    nombre: 'ARMARIO',
    id : crypto.randomUUID(),
    descripcion : 'Armario para dormitorio: Espacioso armario de tres puertas en acabado de roble natural, con compartimentos internos ajustables y espejo integrado en la puerta central. Diseñado para maximizar el espacio de almacenamiento y mantener la organización sin comprometer el estilo, ideal para cualquier dormitorio contemporáneo.',
    imagen : './armario.jpg',
    price : 799.99,
    descuento: 30
  },
  {
    nombre: 'COCINA',
    id : crypto.randomUUID(),
    descripcion : 'Comedor de madera: Mesa robusta de comedor en madera de nogal, con capacidad para seis personas y acabado en barniz mate que resalta la belleza natural de la madera. Acompañada de sillas tapizadas en tela gris claro y respaldos ergonómicos, ideal para reuniones familiares y cenas elegantes con estilo y confort',
    imagen : './cocina.jpg',
    price : 399.99,
    descuento: 50
  }
]