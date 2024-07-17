import { useContext, useState } from "react";
import { Product } from "../types";
import { ProductContext } from "../context/Contexto";
import "../StyleSheets/SearchBar.css";
import { Link } from "react-router-dom";

const ItemBarSearch: React.FC = () => {
  const [filterBar, setFilterBar] = useState("");
  const productContext = useContext(ProductContext);

  if (!productContext) {
    return null;
  }

  const { products } = productContext;

  let barProFilter: Product[] = [];
  if (filterBar != "") {
    barProFilter = products.filter((product) =>
      product.nombre.toLowerCase().includes(filterBar.toLowerCase())
    );
  }
   // Limitar la cantidad de elementos a 5
   const limitesProducts = 5
   const limitedBarProFilter = barProFilter.slice(0, limitesProducts);

  return (
    <div className="searchBar">
      <input
        type="text"
        onChange={(e) => setFilterBar(e.target.value)}
        className="searchBar__input"
      />
      <div className="searchBar__results">
        {limitedBarProFilter.map((proFilter) => (
          <Link
            className="results"
            key={proFilter.id}
            to={`/product/${proFilter.id}`}
          >
            <i className="bi bi-search"></i>
            <p className="results__name">{proFilter.nombre}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItemBarSearch;
