import { HOSTNAME, clearSession, setSession } from '../project/api/helpers';

export const createUserSlice = (set, get) => ({
    user: {},
    error: '',
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
                set({ user: data });
            } else {
                throw new Error(data.message);
            }
        } catch (err) {
            set({ error: err.message });
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
                set({ user: data });
            } else {
                throw new Error(data.message);
            }
        } catch (err) {
            set({ error: err.message });
        }
    },
    logout: async () => {
        await clearSession();
        set({ user: {} });
    },
    clearError: () => {
        if (get().error) {
            set({ error: '' });
        }
    },
});
