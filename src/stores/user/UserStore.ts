import { createStore } from 'effector';
import { cloneDeep } from 'lodash';
import getTokenData from '../../utils/getTokenData';
import { login, logout } from './UserEvents';
import UserState from './UserState';

const initialState: UserState = {
  token: localStorage.getItem('token') || '',
  name: getTokenData(localStorage.getItem('token') || '').name,
  lastname: getTokenData(localStorage.getItem('token') || '').lastname,
};

const UserStore = createStore(initialState)
  .on(login, (state, { token }) => {
    const newState = cloneDeep(state);

    localStorage.setItem('token', token);
    const data = getTokenData(token);
    newState.token = token;
    newState.name = data?.name;
    newState.lastname = data?.lastname;

    return newState;
  })
  .on(logout, (state) => {
    const newState = cloneDeep(state);

    localStorage.removeItem('token');
    newState.token = '';

    return newState;
  });

export default UserStore;
