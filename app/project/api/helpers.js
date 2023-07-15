import { getSession } from './sessionUtils';

export const HOSTNAME = 'http://10.0.2.2:8080';

export const protectedFetch = async (url, method, headers = null, body = null) => {
    const session = await getSession();
    const { token } = session;
    return fetch(HOSTNAME + url, {
        method,
        body,
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`,
        },
    });
};
