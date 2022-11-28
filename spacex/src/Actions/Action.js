import axios from 'axios';
import { GET_DATA_SUCCESS, GET_FILTERED_DATA_SUCCESS } from './Action.Types';

export const GetData = () => dispatch => {
  axios
    .get('https://api.spacexdata.com/v3/capsules')
    .then(res => dispatch({ type: GET_DATA_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
};

export const GetFilteredData = (status, type) => dispatch => {
  axios
    .get(`https://api.spacexdata.com/v3/capsules?status=${status}&type=${type}`)
    .then(res =>
      dispatch({ type: GET_FILTERED_DATA_SUCCESS, payload: res.data })
    )
    .catch(err => console.log(err));
};
