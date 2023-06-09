import { HOSTNAME } from '../project/api/helpers';
import { setSession, clearSession } from '../project/api/sessionUtils';

export const createAuthenticationSlice = (set) => ({
    myUser: {
        data: null,
        error: null,
    },
    register: async ({ email, password, firstName, lastName }) => {
        try {
            const response = await fetch(`${HOSTNAME}/auth/register`, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    firstName,
                    lastName,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (response.status === 200) {
                await setSession(data);
                set((state) => ({ myUser: {
                    ...state.myUser,
                    data,
                } }));
            } else {
                set((state) => ({ myUser: {
                    ...state.myUser,
                    error: data.message,
                }}));
            }
        } catch (err) {
            set((state) => ({ myUser: {
                ...state.myUser,
                error: err.message,
            }}));
        }
    },
    login: async ({ email, password }) => {
        try {
            const response = await fetch(`${HOSTNAME}/auth/login`, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (response.status === 200) {
                await setSession(data);
                set((state) => ({ myUser: {
                    ...state.myUser,
                    data,
                } }));
            } else {
                set((state) => ({ myUser: {
                    ...state.myUser,
                    error: data.message,
                }}));
            }
        } catch (err) {
            set((state) => ({ myUser: {
                ...state.myUser,
                error: err.message,
            }}));
        }
    },
    logout: async () => {
        await clearSession();
        set((state) => ({ myUser: {
            ...state.myUser,
            data: null,
        }}));
    },
    clearError: () => {
        set((state) => ({ myUser: {
            ...state.myUser,
            error: null,
        }}));
    },
    setUser: (myUser) => {
        set((state) => ({ myUser: {
            ...state.myUser,
            data: myUser,
        }}));
    },
});
