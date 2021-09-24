import axios, { AxiosInstance } from 'axios';

export default function restClient(
  baseUrl = 'https://womens-map-service-dev.herokuapp.com/'
): AxiosInstance {
  const instance = axios.create({
    baseURL: `${baseUrl}`,
  });

  return instance;
}
