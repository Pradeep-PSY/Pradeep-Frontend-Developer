import axios from 'axios';

export const GetData = () => dispatch => {
  axios
    .get('https://api.spacexdata.com/v3/capsules')
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
};
