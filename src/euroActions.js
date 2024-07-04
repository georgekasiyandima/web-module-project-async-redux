import axios from 'axios';

export const FETCH_EURO_REQUEST = 'FETCH_EURO_REQUEST';
export const FETCH_EURO_SUCCESS = 'FETCH_EURO_SUCCESS';
export const FETCH_EURO_FAILURE = 'FETCH_EURO_FAILURE';

export const fetchEuroRequest = () => {
    return {
        type: FETCH_EURO_REQUEST,
    };
};

export const fetchEuroSuccess = () => {
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
          .get('https://rapidapi.com/yuvr99-WHTEITBQbOc/api/euro-20242/playground/apiendpoint_fb6de029-3579-4afd-a7ba-114dae25d5f7')
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