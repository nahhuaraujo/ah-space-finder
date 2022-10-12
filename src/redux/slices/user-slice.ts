import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models';
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '../../utils/localStorage';

const initialState: IUser = {
  id: 0,
  email: '',
  username: '',
  job: '',
  age: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getLocalStorage('user') ? getLocalStorage('user') : initialState,
  reducers: {
    login: (_, action) => {
      if (action.payload) {
        const newState = { ...action.payload };
        setLocalStorage('user', newState);
        return newState;
      } else {
        return { ...initialState };
      }
    },
    logout: () => {
      clearLocalStorage('user');
      return { ...initialState };
    },
  },
});
