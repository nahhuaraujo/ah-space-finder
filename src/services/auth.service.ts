import { IUser } from '../models';

export const loginService = async (username: string, password: string): Promise<IUser | undefined> => {
  if (username === 'test' && password === '1234') {
    return {
      id: 1,
      username: 'tester',
      email: 'test@test.com',
      job: 'Web UI Developer',
      age: 28,
    };
  } else {
    return undefined;
  }
};
