import { protectedFetch } from '../project/api/helpers';
import { setSession } from '../project/api/sessionUtils';

import { createAuthenticationSlice } from './authenticationSlice';

export const createUserSlice = (set) => ({
    user: {
        data: null,
        error: null,
    },
    editUser: async ({ email, password, firstName, lastName, image }) => {
        try {
            const response = await protectedFetch('/user/edit', 
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
            } else {
                set((state) => ({ user: {
                    ...state.user,
                    error: data.message,
                }}));
            }
        } catch (err) {
            set((state) => ({ user: {
                ...state.user,
                error: err.message,
            }}))
        }
    },
    clearUserError: () => {
        set((state) => ({ user: {
            ...state.user,
            error: null,
        }}));
    },
});
