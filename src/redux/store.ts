import { configureStore } from '@reduxjs/toolkit';
import { IUser } from '../models';
import { userSlice } from './slices';

export interface AppStore {
  user: IUser;
}

const store = configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
