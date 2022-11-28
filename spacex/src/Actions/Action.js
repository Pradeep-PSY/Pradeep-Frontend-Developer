import axios from 'axios';
import { GET_DATA_SUCCESS, GET_FILTERED_DATA_SUCCESS } from './Action.Types';

export const GetData = (data) => dispatch => {
    if(data.page && data.limit == 7){
        axios
        .get('https://api.spacexdata.com/v3/capsules?limit=7')
        .then(res => dispatch({ type: GET_DATA_SUCCESS, payload: res.data }))
        .catch(err => console.log(err));
    }
    else if(data.page == true && data.limit == 10){
        axios
        .get('https://api.spacexdata.com/v3/capsules?limit=10&offset=7')
        .then(res => dispatch({ type: GET_DATA_SUCCESS, payload: res.data }))
        .catch(err => console.log(err));
    }
    else if(data.page == false){
        axios
    .get('https://api.spacexdata.com/v3/capsules')
    .then(res => dispatch({ type: GET_DATA_SUCCESS, payload: res.data }))
    .catch(err => console.log(err));
    }
  
};

export const GetFilteredData = (status, type) => dispatch => {
  axios
    .get(`https://api.spacexdata.com/v3/capsules?status=${status}&type=${type}`)
    .then(res =>
      dispatch({ type: GET_FILTERED_DATA_SUCCESS, payload: res.data })
    )
    .catch(err => console.log(err));
};
