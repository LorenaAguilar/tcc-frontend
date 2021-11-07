import { createEvent } from 'effector';

export const login = createEvent<{ token: string }>('login');

export const logout = createEvent('logout');
