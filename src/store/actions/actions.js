import axiosApi from "../../axiosApi";

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const ADD_DATA_SUCCESS = 'ADD_DATA_SUCCESS';

export const fetchDataRequest = () => ({type: FETCH_DATA_REQUEST});
export const fetchDataSuccess = data => ({type: FETCH_DATA_SUCCESS, data});
export const fetchDataFailure = error => ({type: FETCH_DATA_FAILURE, error});

export const addDataSuccess = data => ({type: ADD_DATA_SUCCESS, data});

export const fetchData = () => {
    return async (dispatch) => {
        try {
            dispatch(fetchDataRequest());
            const response = await axiosApi.get('http://www.filltext.com/?rows=150&id={number|1000}&firstName=' +
                '{firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}' +
                '&description={lorem|32}');
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            if (error.response) {
                dispatch(fetchDataFailure(error.response.data));
            } else {
                dispatch(fetchDataFailure({global: 'Network error or no internet'}));
            }
        }
    }
};

export const addData = (data, props) => {
    return async (dispatch) => {
        try {
            dispatch(addDataSuccess(data, props.dataAddSuccess()));
        } catch (error) {
            console.error(error);
        }
    }
};