import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const History = () => {
  const history = useHistory();
  const searchedWords = useSelector((state) => state.history.searchedWords);

  const handleClick = (word) => {
    history.push(`/word/${word}`);
  };

  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {searchedWords.map((word, index) => (
          <li key={index} onClick={() => handleClick(word)}>
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;

