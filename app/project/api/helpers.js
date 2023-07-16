import AsyncStorage from '@react-native-async-storage/async-storage';

import { ASYNC_STORAGE_KEYS, isAndroid } from '../constants';
import { getSession } from './sessionUtils';

const platformHost = isAndroid ? '10.0.2.2' : 'localhost';
export const HOSTNAME = `http://${platformHost}:8080`;

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

export const saveDraft = async (draft) => {
    await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.CREATE_GOAL_DRAFT, JSON.stringify(draft));
}

export const getDraft = async () => {
    const draft = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.CREATE_GOAL_DRAFT);

    return JSON.parse(draft);
}
