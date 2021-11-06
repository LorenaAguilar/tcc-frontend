import restClient from '../../clients/RestClient';

const endpoint = '/users';

export default async function CreateUserService(command: {
  email: string;
  password: string;
  name: string;
  lastname: string;
}): Promise<string> {
  const response = await restClient().post(endpoint, command);
  return response.data;
}
