import {
    FETCH_PHOTO_START,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_FAILURE
  } from "../actions";
  
  const initialState = {
    photoOfTheDay: null,
    error: "",
    isLoading: false
  };
  
  function reducer(state = initialState, action) {
    console.log("reducer", action);
    switch (action.type) {
      case FETCH_PHOTO_START:
        return {
          ...state,
          error: "",
          isLoading: true
        };
      case FETCH_PHOTO_SUCCESS:
        return {
          ...state,
          photoOfTheDay: action.payload,
          error: "",
          isLoading: false
        };
      case FETCH_PHOTO_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      default:
        return state;
    }
  }
  
  export default reducer;