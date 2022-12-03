import React, { useState } from 'react';

import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

const App = () => {
  const [images, setImages] = useState([]);

  const handelSubmit = async (term) => {
    const response = await searchImages(term);
    setImages(response);
  };

  return (
    <div>
      <SearchBar onSubmit={handelSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
