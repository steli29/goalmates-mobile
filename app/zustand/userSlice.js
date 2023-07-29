import { createAxiosInstance } from '../project/api/helpers';
import { setSession } from '../project/api/sessionUtils';

import { createAuthenticationSlice } from './authenticationSlice';
import { createFollowersSlice } from './followersSlice';

export const createUserSlice = (set) => ({
    user: {
        data: null,
        error: null,
        isUserLoading: false,
    },
    editUser: async ({ email, password, firstName, lastName }) => {
        const instance = await createAxiosInstance();
        try {
            set((state) => ({
                user: {
                    ...state.user,
                    isUserLoading: true,
                },
            }));
            const response = await instance.post(
                '/user/edit',
                JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName,
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const { data } = response;
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
        const instance = await createAxiosInstance();
        try {
            set((state) => ({
                user: {
                    ...state.user,
                    isUserLoading: true,
                },
            }));
            const response = await instance.get('/user/', {
                params: {
                    id,
                },
            });
            const { data } = response;
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
