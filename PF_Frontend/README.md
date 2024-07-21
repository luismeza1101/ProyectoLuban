# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Contenido de los componentes

 - BestProducts : Contienen los productos mas vendidos de la pagina principal

 - CardBestProduct: Es la carta donde se encuentra el producto mas vendido, contiene una imagen del producto y su nombre

 - Carousel: Contiene el carrusel de las imagenes que muestran las ofertas que hay en la tienda, esta en la ventana principal

 - CatProducts: Es el modal que se encuentra en la pagina de categorias, se usa para filtrar entre los productos

 - CarProducts: Son los elementos que hay dentro del carrito de compras, son todos los productos que añadimos

 - Footer: Es el footer de la pagina, contiene los links de las redes sociales y mas

 - FormContact: Es el formulario que se usa para que los clientes puedan escribir sus dudas o quejas que tienen, esta en la pagina de ayuda

 - Header: Es el header de la pagina, contiene el logo de la empresa, una barra de busqueda de productos y las secciones de opciones de cuenta, el carrito y para acceder a la pagina de ayuda y de categorias

 - ModalPagos: Modal donde se ve el resumen de todas las cosas que el cliente añadio al carrito de compras, esta en la pagina del carrito

 - OptionAccount: Es el modal que se muestra cuando se hace click en la imagen de perfil del usuario, muestra las opciones de la cuenta

 - ProductCard: Es el componente de cada carta de cada producto

 - ProductInfo: Es la informacion adicional de cada producto, redirigido desde cada producto

 - ProductInfoOferta: Es la informacion adicional de cada producto en oferta, redirigido desde cada producto

 - Products: Es la lista de todos los productos que hay

 - QuestionFrequent: Son las preguntas frecuentes que dan respuesta a las dudas comunes de los clientes, esta en la pagina de ayuda

 - RegisterUser: Son las opciones que tiene el header, para que el usuario pueda registrarse e iniciar sesión, aparecen cuando el usuario no ingreso a su sesión

 - SearchBar: Es la barra de busqueda que esta en el header

 - User: Es lo que aparece cuando el usuario inicia sesión

 # Contenido de las paginas
 - AboutUs: Contiene el header, informacion acerca de la empresa y el footer

 - CarShoping: Contiene el header, la lista de los productos añadidos al carrito y ModalPagos

 - Categories: Contiene el header, el modal para filtrar entre los productos, la lista de todos los productos y el footer

 - DataProductos: Es la pagina dinamica de todos los productos, contiene al componente ProductInfo

 - DataProductosOferta: Es la pagina dinamica de todos los productos en oferta, contiene al componente ProductInfoOferta

 - Help: Contiene el Header, QuestionFrequent, FormContact, Footer

 - Home: Contiene el Header, Carousel, BestProducts y el Footer

 - InicioSesion: Es donde el usuario inicia sesion

 - LibroReclamaciones: Es a donde se redirige cuando una persona quiere hacer un reclamo

 - ModifyInfoUser: Es el modal que se abre cuando el usuario quiere cambiar su informacion

 - Register: Es la pagina para que el uaurio pueda registrarse 
 
 # Contenido CSS
 - Cada archivo tiene sus estilos en el archivo css de su mismo nombre

 # Adicional
 - data: Es informacion que se usa para agregar o eliminar elementos 

 - fuctions: Se encuentran funciones que son utilizadas por varios componentes

 - types.d.ts: Son los tipos que utilizamos para tipar de mejor manera