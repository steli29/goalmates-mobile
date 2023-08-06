import { create } from 'zustand';
import { createAuthenticationSlice } from './authenticationSlice';
import { createUserSlice } from './userSlice';
import { createSearchUsersSlice } from './searchUsersSlice';
import { createFollowersSlice } from './followersSlice';
import { createImageSlice } from './imageSlice';
import { createPostSlice } from './postSlice';
import { createFeedSlice } from './feedSlice';
import { createUserFeedSlice } from './userFeedSlice';

export const useStore = create((...a) => ({
    ...createAuthenticationSlice(...a),
    ...createUserSlice(...a),
    ...createSearchUsersSlice(...a),
    ...createFollowersSlice(...a),
    ...createImageSlice(...a),
    ...createPostSlice(...a),
    ...createFeedSlice(...a),
    ...createUserFeedSlice(...a),
}));
