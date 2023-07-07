import {create} from 'zustand';
import {createAuthenticationSlice} from './authenticationSlice';
import { createUserSlice } from './userSlice';
import { createSearchUsersSlice } from './searchUsersSlice';

export const useStore = create((...a) => ({
  ...createAuthenticationSlice(...a),
  ...createUserSlice(...a),
  ...createSearchUsersSlice(...a),
}));
