import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ASYNC_STORAGE_KEYS, isAndroid } from '../constants';
import { getSession } from './sessionUtils';

const platformHost = isAndroid ? '10.0.2.2' : 'localhost';
export const HOSTNAME = `http://${platformHost}:8080`;

export const createAxiosInstance = async () => {
    const session = await getSession();
    const { token } = session;

    const instance = axios.create({
        baseURL: HOSTNAME,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return instance;
};

export const saveDraft = async (draft) => {
    await AsyncStorage.setItem(ASYNC_STORAGE_KEYS.CREATE_GOAL_DRAFT, JSON.stringify(draft));
};

export const getDraft = async () => {
    const draft = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.CREATE_GOAL_DRAFT);

    return JSON.parse(draft);
};

export const sortPostsByDateCreated = (posts) => {
    const sortedPosts = posts.sort((a, b) => {
        const dateA = new Date(a.dateCreated);
        const dateB = new Date(b.dateCreated);

        return dateB - dateA;
    })
    return sortedPosts;
};

export const sortPostsByCommenstCount = (posts) => {
    const sortedPosts = posts.sort((a, b) => {
        return b.commentsCount - a.commentsCount;
    });

    return sortedPosts;
}
