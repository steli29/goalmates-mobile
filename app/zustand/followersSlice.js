import { createAxiosInstance } from '../project/api/helpers';

export const createFollowersSlice = (set) => ({
    connections: {
        following: [],
        followers: [],
        error: null,
    },
    followUser: async (followerId, followeeId) => {
        const instance = await createAxiosInstance();
        try {
            await instance.post(
                '/follow',
                JSON.stringify({
                    followerId,
                    followeeId,
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        } catch (err) {
            console.log(err);
        }
    },
    unfollowUser: async (followerId, followeeId) => {
        const instance = await createAxiosInstance();
        try {
            await instance.post(
                '/follow/unfollow',
                JSON.stringify({
                    followerId,
                    followeeId,
                }),
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        } catch (err) {
            console.log(err);
        }
    },
    getAllFollowing: async (followerId) => {
        const instance = await createAxiosInstance();
        try {
            const response = await instance.get('/follow/following', {
                params: {
                    followerId,
                },
            });
            const { data } = response;
            if (response.status === 200) {
                set((state) => ({
                    connections: {
                        ...state.connections,
                        following: data,
                    },
                }));
            } else {
                set((state) => ({
                    connections: {
                        ...state.connections,
                        error: data.message,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                connections: {
                    ...state.connections,
                    error: err.message,
                },
            }));
        }
    },
    getAllFollowers: async (followeeId) => {
        const instance = await createAxiosInstance();
        try {
            const response = await instance.get('/follow/followed', {
                params: {
                    followeeId,
                },
            });

            const { data } = response;
            if (response.status === 200) {
                set((state) => ({
                    connections: {
                        ...state.connections,
                        followers: data,
                    },
                }));
            } else {
                set((state) => ({
                    connections: {
                        ...state.connections,
                        error: data.message,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                connections: {
                    ...state.connections,
                    error: err.message,
                },
            }));
        }
    },
    clearConnectionsError: () => {
        set((state) => ({
            connections: {
                ...state.connections,
                error: null,
            },
        }));
    },
});
