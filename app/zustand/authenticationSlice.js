import { HOSTNAME } from '../project/api/helpers';
import { setSession, clearSession } from '../project/api/sessionUtils';
import { convertBase64ToImage } from '../project/helpers/helper-functions';

export const createAuthenticationSlice = (set) => ({
    myUser: {
        data: null,
        status: null,
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
                set((state) => ({ myUser: {
                    ...state.myUser,
                    status: 'ok from register',
                }}));
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
                let image = null;
                if(data.image) {
                    image = convertBase64ToImage(data.image)
                };
                set((state) => ({ myUser: {
                    ...state.myUser,
                    data: {
                        ...data,
                        image,
                    },
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
    verify: async (email, code) => {
        try {
            const response = await fetch(`${HOSTNAME}/auth/verify`, {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    code,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            if (response.status === 200) {
                set((state) => ({ myUser: {
                    ...state.myUser,
                    status: 'ok from verify',
                }}));
            } else {
                set((state) => ({ myUser: {
                    ...state.myUser,
                    error: data.message,
                }}));
            }
        } catch(err){
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
