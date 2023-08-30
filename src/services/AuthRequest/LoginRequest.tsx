import {axios} from '../config/apiConfig';

export const testApi = () => {
  return axios.get('products');
};
