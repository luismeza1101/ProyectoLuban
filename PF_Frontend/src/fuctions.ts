// Funcion para aumentar la cantidad de productos
export const increaseCant = (minCant: number, setMinCant: React.Dispatch<React.SetStateAction<number>>) => {
  if (minCant == 9) {
    alert("Solo puedes comprar un maximo de 9 productos");
  } else {
    setMinCant(minCant + 1);
  }
};

// Funcion para disminuir la cantidad de productos
export const decreaseCant = (minCant: number, setMinCant: React.Dispatch<React.SetStateAction<number>>) => {
  if (minCant == 1) {
    alert("Debes comprar como minimo un producto");
  } else {
    setMinCant(minCant - 1);
  }
}

// Funcion para cargar la imagen de cada producto
export const getImage = (imageName: string, categoria: number) => {
  try {
    let cat = '';
    switch (categoria) {
      case 1:
         cat = 'cocina/'
        break;
      case 2: 
         cat = 'dormitorio/'
        break;
      case 3:
         cat = 'sala/'
        break;
      case 4:
         cat = 'baño/'
        break;       
    }
    return `../../public/FotosMuebles/${cat}${imageName}`;
  } catch (err) {
    console.error(`Error al cargar la imagen: ${imageName}`, err);
    return undefined;
  }
};