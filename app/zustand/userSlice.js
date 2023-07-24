import { protectedFetch } from '../project/api/helpers';
import { setSession } from '../project/api/sessionUtils';

import { createAuthenticationSlice } from './authenticationSlice';
import { createFollowersSlice } from './followersSlice';

export const createUserSlice = (set) => ({
    user: {
        data: null,
        error: null,
        isUserLoading: false,
    },
    editUser: async ({ email, password, firstName, lastName, image }) => {
        try {
            set((state) => ({
                user: {
                    ...state.user,
                    isUserLoading: true,
                },
            }));
            const response = await protectedFetch(
                '/user/edit',
                'POST',
                {
                    'Content-Type': 'application/json',
                },
                JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName,
                    image,
                })
            );
            const data = await response.json();
            if (response.status === 200) {
                await setSession(data);
                createAuthenticationSlice(set).setUser(data);
                set((state) => ({
                    user: {
                        ...state.user,
                        isUserLoading: false,
                    },
                }));
            } else {
                set((state) => ({
                    user: {
                        ...state.user,
                        error: data.message,
                        isUserLoading: false,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                user: {
                    ...state.user,
                    error: err.message,
                    isUserLoading: false,
                },
            }));
        }
    },
    getUserById: async (id) => {
        try {
            set((state) => ({
                user: {
                    ...state.user,
                    isUserLoading: true,
                },
            }));
            const response = await protectedFetch(
                `/user/?${new URLSearchParams({
                    id,
                })}`,
                'GET'
            );
            const data = await response.json();
            if (response.status === 200) {
                await createFollowersSlice(set).getAllFollowers(id);
                await createFollowersSlice(set).getAllFollowing(id);
                set((state) => ({
                    user: {
                        ...state.user,
                        isUserLoading: false,
                        data,
                    },
                }));
            } else {
                set((state) => ({
                    user: {
                        ...state.user,
                        isUserLoading: false,
                        error: data.message,
                    },
                }));
            }
        } catch (error) {
            set((state) => ({
                user: {
                    ...state.user,
                    isUserLoading: false,
                    error: error.message,
                },
            }));
        }
    },
    clearUserError: () => {
        set((state) => ({
            user: {
                ...state.user,
                error: null,
            },
        }));
    },
});
