import { User } from '../models';

export const loginService = async (username: string, password: string): Promise<User | undefined> => {
  if (username === 'username' && password === 'admin') {
    return {
      username: 'username',
      email: 'test@test.com',
    };
  } else {
    return undefined;
  }
};
