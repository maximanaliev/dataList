import {ADD_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS} from "../actions/actions";

const initialState = {
    dataLoading: false,
    dataError: null,
    data: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {...state, dataLoading: true};
        case FETCH_DATA_SUCCESS:
            return {...state, dataLoading: false, dataError: null, data: action.data};
        case FETCH_DATA_FAILURE:
            return {...state, dataError: action.error, dataLoading: false};
        case ADD_DATA_SUCCESS:
            return {...state, data: [...state.data, action.data]};
        default:
            return state;
    }
};

export default reducer;