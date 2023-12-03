// Action creators for fetching word details, entries, and synonyms

export const fetchWordDetails = (word) => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_WORD_DETAILS_REQUEST' });
  
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
  
        dispatch({ type: 'FETCH_WORD_DETAILS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_WORD_DETAILS_FAILURE' });
      }
    };
  };
  
  export const fetchEntries = () => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_ENTRIES_REQUEST' });
  
      try {
        const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/entries');
        const data = await response.json();
  
        dispatch({ type: 'FETCH_ENTRIES_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_ENTRIES_FAILURE' });
      }
    };
  };
  
  export const fetchSynonyms = () => {
    return async (dispatch) => {
      dispatch({ type: 'FETCH_SYNONYMS_REQUEST' });
  
      try {
        const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/synonyms');
        const data = await response.json();
  
        dispatch({ type: 'FETCH_SYNONYMS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_SYNONYMS_FAILURE' });
      }
    };
  };
  