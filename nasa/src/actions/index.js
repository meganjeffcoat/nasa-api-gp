import axios from "axios";

export const FETCH_PHOTO_START = "FETCH_PHOTO_START";
export const FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS";
export const FETCH_PHOTO_FAILURE = "FETCH_PHOTO_FAILURE";

export const getPhoto = () => dispatch => {
  dispatch({ type: FETCH_PHOTO_START });
  axios
    .get(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`
    )
    .then(res => {
      console.log(res.data);
      dispatch({
        type: FETCH_PHOTO_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_PHOTO_FAILURE,
        payload: err
      });
    });
};

// function getPhoto() {
//   return function(dispatch) {
//     dispatch({ type: FETCH_PHOTO_START })
//   }
// }