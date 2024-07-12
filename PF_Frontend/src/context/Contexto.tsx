import React, { createContext, useState, ReactNode } from 'react';
import { Product, CarProduct, User} from '../types';

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
  isLogged: boolean
  setIsLogged: (logged: boolean) => void
  userData: User | null
  setUserData: (data: User | null) => void
  logout: () => void
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
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState<User | null>(null);
  const logout = () => {
    // Lógica para limpiar los datos de usuario y establecer isLogged a false
    setUserData(null);
    setIsLogged(false);
    // También podrías limpiar el token del localStorage si lo estás usando
    localStorage.removeItem('token');
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, productCar, setProductCar, removeProductFromCar, pagoTotal, setPagoTotal, cateProduct, setCateProduct, filterPro, setFilterPro, isLogged, setIsLogged, userData, setUserData, logout}}>
      {children}
    </ProductContext.Provider>
  );
};
