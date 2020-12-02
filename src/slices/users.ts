import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserInterface } from '../types';

interface UserState {
  users: UserInterface[];
  isLoading: boolean;
  error?: string;
}

export const initialState: UserState = { users: [], isLoading: false };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsersStart(state) {
      state.isLoading = true;
      state.users = [];
      state.error = undefined;
    },
    getUsersSuccess(state, { payload }: PayloadAction<UserInterface[]>) {
      state.users = payload;
      state.isLoading = false;
    },
    getUsersFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailed,
} = userSlice.actions;

export default userSlice.reducer;
