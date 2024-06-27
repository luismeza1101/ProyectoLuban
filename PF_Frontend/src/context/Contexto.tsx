import React, { createContext, useState, ReactNode } from 'react';

interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria_id: number;
  imagen_url: string;
}

interface CarProduct {
    name: string
    price: number
  }

interface ProductContextType {
  products: Product[];
  setProducts: (products: Product[]) => void;   
  productCar: CarProduct[];
  setProductCar: (productCar: CarProduct[]) => void;
  removeProductFromCar: (name: string, price:number, cantidad:number) => void;
  pagoTotal: number
  setPagoTotal: (monto: number) => void
  cateProduct: number 
  setCateProduct: (cate: number) => void
  filterPro: Product[] 
  setFilterPro: (filter: Product[]) => void
}


export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]); 
  const [productCar, setProductCar] = useState<CarProduct[]>([])
  const [pagoTotal, setPagoTotal] = useState(0);
  const [cateProduct, setCateProduct] = useState(0)
  const [filterPro, setFilterPro] = useState<Product[]>([...products])
  const removeProductFromCar = (name: string, price:number, cantidad:number) => {
    setProductCar(prevProductCar => prevProductCar.filter(product => product.name !== name));
    const deletePrice = price * cantidad;
    setPagoTotal(pagoTotal - deletePrice)
  };
  

  return (
    <ProductContext.Provider value={{ products, setProducts, productCar, setProductCar, removeProductFromCar, pagoTotal, setPagoTotal, cateProduct, setCateProduct, filterPro, setFilterPro  }}>
      {children}
    </ProductContext.Provider>
  );
};
