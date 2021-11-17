import { login, logout } from './UserEvents';
import UserStore from './UserStore';

describe('UserStore', () => {
  describe('login', () => {
    it('should login', () => {
      const initialState = {
        name: '',
        lastname: '',
        token: '',
      };
      UserStore.setState(initialState);
      const newToken = 'new bearer token';
      login(newToken);

      expect(UserStore.getState()).toEqual({ lastname: '', name: '', token: undefined });
    });
  });

  describe('logout', () => {
    it('should logout', () => {
      const initialState = {
        name: 'name',
        lastname: 'lastname',
        token: 'token',
      };
      UserStore.setState(initialState);

      logout();

      expect(UserStore.getState()).toEqual({ lastname: 'lastname', name: 'name', token: '' });
    });
  });
});
