import restClient from '../../clients/RestClient';

const endpoint = '/auth';

interface LoginResponse {
  token: string;
  authType: string;
}

export default function loginService(command: {
  email: string;
  password: string;
}): Promise<string> {
  return restClient()
    .post<LoginResponse>(endpoint, command)
    .then((response) => convertToken(response.data));
}

const convertToken = (data: LoginResponse) => `${data.authType} ${data.token}`;
