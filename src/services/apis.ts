import {BASE_URL} from './environment';

export const getDataAPiRequest = async (url: any) => {
  const getURL = BASE_URL + url;

  return await fetch(getURL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  }).then(response => response.json());
};
