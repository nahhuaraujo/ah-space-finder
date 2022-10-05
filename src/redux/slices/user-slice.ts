import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../models';
import { getLocalStorage, setLocalStorage, clearLocalStorage } from '../../utils/localStorage';

const initialState: User = {
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
