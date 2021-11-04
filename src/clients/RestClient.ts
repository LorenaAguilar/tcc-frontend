import axios, { AxiosInstance } from 'axios';

const getUrl = () => {
  const isProdEnv = window.location.host === 'womens-map.herokuapp.com';
  if (isProdEnv) {
    return 'https://womens-map-service.herokuapp.com/';
  }

  return 'https://womens-map-service-dev.herokuapp.com/';
};

export default function restClient(baseUrl = getUrl()): AxiosInstance {
  const defaultInfos = {
    baseURL: `${baseUrl}`,
    headers: { 'content-type': 'application/json' },
  };

  const authorization = localStorage.getItem('token');

  if (baseUrl === getUrl() && authorization) {
    return axios.create({
      baseURL: `${baseUrl}`,
      headers: { 'content-type': 'application/json', Authorization: authorization },
    });
  }

  return axios.create(defaultInfos);
}
