import { create } from 'zustand';
import { createAuthenticationSlice } from './authenticationSlice';
import { createUserSlice } from './userSlice';
import { createSearchUsersSlice } from './searchUsersSlice';
import { createFollowersSlice } from './followersSlice';

export const useStore = create((...a) => ({
    ...createAuthenticationSlice(...a),
    ...createUserSlice(...a),
    ...createSearchUsersSlice(...a),
    ...createFollowersSlice(...a),
}));
