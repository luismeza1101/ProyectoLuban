import React, { useContext, useState, useEffect } from 'react';
import '../StyleSheets/CatProducts.css'
import { ProductContext } from '../context/Contexto';
import { Product } from '../types';

const CatProducts: React.FC = () => {
  const productContext = useContext(ProductContext);
  const [cate, setCate] = useState('Todos')
  
  if (!productContext) {
    return null;
  }
  
  const { setCateProduct, setFilterPro, cateProduct, products } = productContext;

  useEffect(() => {
    filterCategories();
  }, [cateProduct, products]);

  const filterCategories = () => {
    let productsFilter: Product[] = []
    switch (cateProduct) {
      case 1:
        productsFilter = products.filter(cate => cate.categoria_id === 1)
        break;
      case 2:
        productsFilter = products.filter(cate => cate.categoria_id === 2)
        break;
      case 3:
        productsFilter = products.filter(cate => cate.categoria_id === 3)
        break;
      case 4:
        productsFilter = products.filter(cate => cate.categoria_id === 4)
        break;
      case 0:
        productsFilter = [...products]
        break;
      default:
        productsFilter = [...products]
        break;
    }
    setFilterPro(productsFilter);
  }

  const handleCategoria = (evt: React.MouseEvent<HTMLLIElement>) => {
    const categoriaSeleccionada = (evt.target as HTMLLIElement).textContent;
    if (categoriaSeleccionada) {
      setCate(categoriaSeleccionada);
      switch (categoriaSeleccionada) {
        case 'Comedor':
          setCateProduct(1)
          break;
        case 'Dormitorio':
          setCateProduct(2)
          break;
        case 'Sala':
          setCateProduct(3)
          break;
        case 'Baño':
          setCateProduct(4)
          break;    
        case 'Todos':
          setCateProduct(0)
          break;    
      }
    }
  }

  return (
    // Lista de categorias de los productos
    <aside className="categoriesPro">
      <h4>{cate}</h4>
      <div className='listProducts'>
        <h6 className="listProducts__titulo">Categorias</h6>
        <ul className="list-group listItems">
          <li className="list-group-item listItem__item" onClick={handleCategoria}>Comedor</li>
          <li className="list-group-item listItem__item" onClick={handleCategoria}>Dormitorio</li>
          <li className="list-group-item listItem__item" onClick={handleCategoria}>Sala</li>
          <li className="list-group-item listItem__item" onClick={handleCategoria}>Baño</li>
          <li className="list-group-item listItem__item" onClick={handleCategoria}>Todos</li>
        </ul>
      </div>
    </aside>
  );
};

export default CatProducts;
