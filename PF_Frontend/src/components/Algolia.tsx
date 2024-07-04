import React, { useState, useEffect } from 'react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import { searchClient } from '../algoliaConfig';
import '../StyleSheets/Algolia.css'

const Hit = ({ hit }: any) => (
  <div className="hit-item">
    <h2 className="hit-name">{hit.nombre}</h2>
  </div>
);

const Search: React.FC = () => {

  const [textBar, setTextBar] = useState('');
  const [showData, setShowData] = useState('hiden');

  const handleBar = (evt: React.SyntheticEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement;
    setTextBar(target.value);
}

useEffect(() => {
  if (textBar !== '') {
    setShowData('show')
  } else {
    setShowData('hiden')
  }
}, [textBar]);

  
  return (
    <InstantSearch indexName="productosLuban" searchClient={searchClient}>
      <SearchBox onChange={handleBar}/>
      <div className={`listData listData-${showData}`}>
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
};

export default Search;
