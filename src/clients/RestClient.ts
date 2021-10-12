import axios, { AxiosInstance } from 'axios';

const getUrl = () => {
  const isProdEnv = window.location.host === 'womens-map.herokuapp.com';
  if (isProdEnv) {
    return 'https://womens-map-service.herokuapp.com/';
  }

  return 'https://womens-map-service-dev.herokuapp.com/';
};

export default function restClient(baseUrl = getUrl()): AxiosInstance {
  const instance = axios.create({
    baseURL: `${baseUrl}`,
    headers: { 'content-type': 'application/json' },
  });

  return instance;
}
