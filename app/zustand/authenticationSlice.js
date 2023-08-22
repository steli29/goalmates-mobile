import axios from 'axios';
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
            const response = await axios.post(
                `${HOSTNAME}/auth/register`,
                {
                    email,
                    password,
                    firstName,
                    lastName,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const { data } = response;
            if (response.status === 200) {
                set((state) => ({
                    myUser: {
                        ...state.myUser,
                        status: 'ok from register',
                    },
                }));
            } else {
                set((state) => ({
                    myUser: {
                        ...state.myUser,
                        error: data.message,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                myUser: {
                    ...state.myUser,
                    error: err.message,
                },
            }));
        }
    },
    login: async ({ email, password }) => {
        try {
            const response = await axios.post(
                `${HOSTNAME}/auth/login`,
                {
                    email,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const { data } = response;
            if (response.status === 200) {
                await setSession(data);
                let image = null;
                if (data.image) {
                    image = convertBase64ToImage(data.image);
                }
                set((state) => ({
                    myUser: {
                        ...state.myUser,
                        data: {
                            ...data,
                            image,
                        },
                    },
                }));
            } else {
                set((state) => ({
                    myUser: {
                        ...state.myUser,
                        error: data.message,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                myUser: {
                    ...state.myUser,
                    error: err.message,
                },
            }));
        }
    },
    verify: async (email, code) => {
        try {
            const response = await axios.post(
                `${HOSTNAME}/auth/verify`,
                {
                    email,
                    code,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const { data } = response;
            if (response.status === 200) {
                set((state) => ({
                    myUser: {
                        ...state.myUser,
                        status: 'ok from verify',
                    },
                }));
            } else {
                set((state) => ({
                    myUser: {
                        ...state.myUser,
                        error: data.message,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                myUser: {
                    ...state.myUser,
                    error: err.message,
                },
            }));
        }
    },
    logout: async () => {
        await clearSession();
        set((state) => ({
            myUser: {
                ...state.myUser,
                data: null,
            },
        }));
    },
    clearError: () => {
        set((state) => ({
            myUser: {
                ...state.myUser,
                error: null,
            },
        }));
    },
    setUser: (myUser) => {
        set((state) => ({
            myUser: {
                ...state.myUser,
                data: myUser,
            },
        }));
    },
});
