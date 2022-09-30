import { User } from '../models';

export const loginService = async (username: string, password: string): Promise<User | undefined> => {
  if (username === 'test' && password === '1234') {
    return {
      username: 'tester',
      email: 'test@test.com',
    };
  } else {
    return undefined;
  }
};
