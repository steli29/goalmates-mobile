import { protectedFetch } from '../project/api/helpers';

export const createFollowersSlice = (set) => ({
    connections: {
        following: [],
        followers: [],
        error: null,
    },
    followUser: async (followerId, followeeId) => {
        try {
            await protectedFetch(
                '/follow',
                'POST',
                {
                    'Content-Type': 'application/json',
                },
                JSON.stringify({
                    followerId,
                    followeeId,
                })
            );
        } catch (err) {
            console.log(err);
        }
    },
    unfollowUser: async (followerId, followeeId) => {
        try {
            await protectedFetch(
                '/follow/unfollow',
                'POST',
                {
                    'Content-Type': 'application/json',
                },
                JSON.stringify({
                    followerId,
                    followeeId,
                })
            );
        } catch (err) {
            console.log(err);
        }
    },
    getAllFollowing: async (followerId) => {
        try {
            const response = await protectedFetch(
                `/follow/following?${new URLSearchParams({
                    followerId,
                })}`,
                'GET',
            );
            const data = await response.json();
            if(response.status === 200) {
                set((state) => ({
                    connections: {
                        ...state.connections,
                        following: data,
                    }
                }))
            } else {
                set((state) => ({
                    connections: {
                        ...state.connections,
                        error: data.message,
                    }
                }));
            }
        } catch(err) {
            set((state) => ({
                connections: {
                    ...state.connections,
                    error: err.message,
                }
            }))
        }
    },
    getAllFollowers: async (followeeId) => {
        try {
            const response = await protectedFetch(
                `/follow/followed?${new URLSearchParams({
                    followeeId,
                })}`,
                'GET',
            );
            const data = await response.json();
            if(response.status === 200) {
                set((state) => ({
                    connections: {
                        ...state.connections,
                        followers: data,
                    }
                }))
            } else {
                set((state) => ({
                    connections: {
                        ...state.connections,
                        error: data.message,
                    }
                }));
            }
        } catch(err) {
            set((state) => ({
                connections: {
                    ...state.connections,
                    error: err.message,
                }
            }))
        }
    },
    clearConnectionsError: () => {
        set((state) => ({
            connections: {
                ...state.connections,
                error: null,
            }
        }))
    }
});
