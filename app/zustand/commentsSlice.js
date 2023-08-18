import { createAxiosInstance } from '../project/api/helpers';

export const createCommentsSlice = (set) => ({
    comments: {
        data: null,
        isLoading: false,
        error: null,
    },
    postComment: async (text, postId, userId) => {
        const axiosInstance = await createAxiosInstance();
        try {
            set((state) => ({
                feed: {
                    ...state.comments,
                    isLoading: true,
                },
            }));
            const response = await axiosInstance.post(
                '/comment',
                {
                    text,
                    postId,
                    userId,
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
                    comments: {
                        ...state.comments,
                        isLoading: false,
                    },
                }));
            } else {
                set((state) => ({
                    comments: {
                        ...state.comments,
                        error: data.message,
                        isLoading: false,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                comments: {
                    ...state.comments,
                    error: err,
                    isLoading: false,
                },
            }));
        }
    },
    getComments: async (id) => {
        const axiosInstance = await createAxiosInstance();
        try {
            set((state) => ({
                comments: {
                    ...state.comments,
                    isLoading: true,
                },
            }));
            const response = await axiosInstance.get('/post/comments/', {
                params: {
                    id,
                },
            });
            const { data } = response;
            if (response.status === 200) {
                set((state) => ({
                    comments: {
                        ...state.comments,
                        data,
                        isLoading: false,
                    },
                }));
            } else {
                set((state) => ({
                    comments: {
                        ...state.comments,
                        error: data.message,
                        isLoading: false,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                comments: {
                    ...state.comments,
                    error: err,
                    isLoading: false,
                },
            }));
        }
    },
    deleteComment: async (id) => {
        const axiosInstance = await createAxiosInstance();
        try {
            set((state) => ({
                comments: {
                    ...state.comments,
                    isLoading: true,
                },
            }));
            const response = await axiosInstance.delete('/comment/', {
                params: {
                    id,
                },
            });
            const { data } = response;
            if (response.status === 200) {
                set((state) => ({
                    comments: {
                        ...state.comments,
                        isLoading: false,
                    },
                }));
            } else {
                set((state) => ({
                    comments: {
                        ...state.comments,
                        error: data.message,
                        isLoading: false,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                comments: {
                    ...state.comments,
                    error: err,
                    isLoading: false,
                },
            }));
        }
    },
});
