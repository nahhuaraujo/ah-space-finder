import { configureStore } from '@reduxjs/toolkit';
import { User } from '../models';
import { userSlice } from './slices';

export interface AppStore {
  user: User;
}

const store = configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
