import { HOSTNAME, clearSession, setSession } from '../project/api/helpers';

export const createUserSlice = (set) => ({
    user: {
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
                set((state) => ({ user: {
                    ...state.user,
                    data,
                } }));
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
                set((state) => ({ user: {
                    ...state.user,
                    data,
                } }));
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
            }}));
        }
    },
    logout: async () => {
        await clearSession();
        set((state) => ({ user: {
            ...state.user,
            data: null,
        }}));
    },
    clearError: () => {
        set((state) => ({ user: {
            ...state.user,
            error: null,
        }}));
    },
    setUser: (user) => {
        set((state) => ({ user: {
            ...state.user,
            data: user,
        }}));
    }
});
