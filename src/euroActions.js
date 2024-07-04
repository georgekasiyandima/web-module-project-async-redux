// src/euroActions.js
import axios from 'axios';

export const FETCH_EURO_REQUEST = 'FETCH_EURO_REQUEST';
export const FETCH_EURO_SUCCESS = 'FETCH_EURO_SUCCESS';
export const FETCH_EURO_FAILURE = 'FETCH_EURO_FAILURE';

export const fetchEuroRequest = () => {
  return {
    type: FETCH_EURO_REQUEST,
  };
};

export const fetchEuroSuccess = (data) => {
  return {
    type: FETCH_EURO_SUCCESS,
    payload: data,
  };
};

export const fetchEuroFailure = (error) => {
  return {
    type: FETCH_EURO_FAILURE,
    payload: error,
  };
};

export const fetchEuroData = () => {
  return (dispatch) => {
    dispatch(fetchEuroRequest());
    axios
      .get('https://euro-20242.p.rapidapi.com/groups/%7BgroupId%7D/teams', {
        headers: {
          'Authorization': 'x-rapidapi-key: 51c399b3d3msh8cb5488a1b15698p12ddcajsn00f08368c2df' // Use correct authorization header
        }
      })
      .then((response) => {
        const data = response.data;
        dispatch(fetchEuroSuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchEuroFailure(errorMsg));
      });
  };
};
