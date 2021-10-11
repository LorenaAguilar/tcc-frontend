import axios, { AxiosInstance } from 'axios';

const getUrl = () => {
  if (process.env.ENV === 'production') {
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
