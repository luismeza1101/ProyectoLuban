import React from 'react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { searchClient } from '../algoliaConfig';
import '../StyleSheets/Algolia.css'

const Hit = ({ hit }: any) => (
  <div className="hit-item">
    <h2 className="hit-name">{hit.nombre}</h2>
  </div>
);

const Search: React.FC = () => {

  
  return (
    <InstantSearch indexName="productosLuban" searchClient={searchClient}>
      <SearchBox />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

export default Search;
