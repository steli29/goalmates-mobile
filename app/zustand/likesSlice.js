import { createAxiosInstance } from '../project/api/helpers';

export const createLikesSlice = (set) => ({
    likes: {
        error: null,
    },
    likePost: async (commentId, userId) => {
        const instance = await createAxiosInstance();
        try {
            await instance.post(
                '/like',
                {
                    commentId,
                    userId,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        } catch (err) {
            set((state) => ({
                likes: {
                    ...state.likes,
                    error: err,
                },
            }));
        }
    },
    dislikePost: async (commentId, userId) => {
        const instance = await createAxiosInstance();
        try {
            await instance.delete('/like', {
                data: {
                    commentId,
                    userId,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (err) {
            set((state) => ({
                likes: {
                    ...state.likes,
                    error: err,
                },
            }));
        }
    },
});
