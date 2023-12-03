import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWordDetails } from '../actions/wordActions';

const Home = () => {
  const dispatch = useDispatch();
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = () => {
    dispatch(fetchWordDetails(searchWord));
    setSearchWord('');
  };

  return (
    <div>
      <input type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {/* Display search results */}
    </div>
  );
};

export default Home;
