import {
  FETCH_EURO_REQUEST,
  FETCH_EURO_SUCCESS,
  FETCH_EURO_FAILURE,
} from '../euroActions';

const initialState = {
    loading: false,
    data: [],
    error: '',
};

const euroReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EURO_REQUEST:
            return {
                ...state,
                loading: true,
            };
            case FETCH_EURO_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    data: action.payload,
                    error: '',
                };
            case FETCH_EURO_FAILURE:
                return {
                    ...state,
                    loading: false,
                    data: [],
                    error: action.payload,
                };
            default:
                return state;
    }
};

export default euroReducer;