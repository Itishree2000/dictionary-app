const initialState = {
    searchedWords: [],
  };
  
  const historyReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_WORD_TO_HISTORY':
        return {
          ...state,
          searchedWords: [...state.searchedWords, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default historyReducer;
  
  