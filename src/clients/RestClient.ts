import axios, { AxiosInstance } from 'axios';

const getUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return 'https://womens-map-service.herokuapp.com/';
  }

  return 'https://womens-map-service-dev.herokuapp.com/';
};

export default function restClient(baseUrl = getUrl()): AxiosInstance {
  console.log('process.env.NODE_ENV', process.env.NODE_ENV);
  const instance = axios.create({
    baseURL: `${baseUrl}`,
    headers: { 'content-type': 'application/json' },
  });

  return instance;
}
