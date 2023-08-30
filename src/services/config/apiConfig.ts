import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

const base_url = 'https://fakestoreapi.com/';
//  const Ocp_Apim_Subscription_Key = "2eaa8c29054b4e468cc33a23a134555e";

const instance = axios.create({
  baseURL: base_url,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    Application: 'Econnect-App',
  },
});

instance.interceptors.request.use(
  async (config: any) => {
    console.log('@@@ Config======', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.request.use(
  async (config: any) => {
    const token = await EncryptedStorage.getItem('USER_TOKEN');
    if (token !== null) {
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

const auth_instance = axios.create({
  baseURL: base_url,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    Application: 'RepublicTv',
  },
});

auth_instance.interceptors.request.use(
  async (config: any) => {
    const token = await EncryptedStorage.getItem('USER_TOKEN');
    if (token !== null) {
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export {
  instance as axios,
  auth_instance as auth_axios,
  base_url,
  // Ocp_Apim_Subscription_Key,
};
