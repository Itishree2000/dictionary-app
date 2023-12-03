import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWordDetails } from '../actions/wordActions';

const WordDetails = () => {
  const { word } = useParams();
  const dispatch = useDispatch();
  const wordDetails = useSelector((state) => state.word.wordDetails);
  const loading = useSelector((state) => state.word.loading);

  useEffect(() => {
    dispatch(fetchWordDetails(word));
  }, [dispatch, word]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Display word details */}
          {JSON.stringify(wordDetails)}
        </div>
      )}
    </div>
  );
};

export default WordDetails;

