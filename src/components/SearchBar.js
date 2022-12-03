import React, { useState } from 'react';

import './SearchBar.css';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handelChange = (event) => {
    setTerm(event.target.value);
  };

  const handelSubmet = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm('');
  };

  return (
    <div className="search-bar">
      <form onSubmit={handelSubmet}>
        <label>Enter a search term:</label>
        <input type="text" value={term} onChange={handelChange} />
      </form>
    </div>
  );
};

export default SearchBar;
