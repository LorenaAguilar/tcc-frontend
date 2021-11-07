import { createStore } from 'effector';
import { cloneDeep } from 'lodash';
import { login, logout } from './UserEvents';
import UserState from './UserState';

const initialState: UserState = {
  token: localStorage.getItem('token') || '',
};

const UserStore = createStore(initialState)
  .on(login, (state, { token }) => {
    const newState = cloneDeep(state);

    localStorage.setItem('token', token);
    newState.token = token;

    return newState;
  })
  .on(logout, (state) => {
    const newState = cloneDeep(state);

    localStorage.removeItem('token');
    newState.token = '';

    return newState;
  });

export default UserStore;
