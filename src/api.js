import axios from 'axios';

const searchImages = async (term) => {
  const {
    data: { results },
  } = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
    },
    params: {
      query: term,
    },
  });
  return results;
};

export default searchImages;
