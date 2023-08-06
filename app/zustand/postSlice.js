import { createAxiosInstance } from '../project/api/helpers';
import { convertBase64ToImage } from '../project/helpers/helper-functions';

export const createPostSlice = (set) => ({
    post: {
        data: null,
        isPostLoading: false,
        error: null,
    },
    getPostById: async (id) => {
        const axiosInstance = await createAxiosInstance();
        try {         
            set((state) => ({
                post: {
                    ...state.post,
                    isPostLoading: true,
                },
            }));   
            const response = await axiosInstance.get('/post/', {
                params: {
                    id,
                },
            });

            const { data } = response;
            if (response.status === 200) {
                const transformedData = {
                    ...data,
                    createdBy: {
                        ...data.createdBy,
                        image: convertBase64ToImage(data.createdBy.image),
                    },
                };
                set((state) => ({
                    post: {
                        ...state.post,
                        data: transformedData,
                        isPostLoading: false,
                    },
                }));
            } else {
                set((state) => ({
                    post: {
                        ...state.post,
                        error: data.message,
                        isPostLoading: false,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                post: {
                    ...state.post,
                    error: err,
                    isPostLoading: false,
                },
            }));
        }
    },
    deletePost: async (id) => {
        const axiosInstance = await createAxiosInstance();
        try {
            set((state) => ({
                post: {
                    ...state.post,
                    isPostLoading: true,
                },
            }));
            const response = await axiosInstance.delete('/post/', {
                params: {
                    id,
                },
            });

            const { data } = response;
            if (response.status === 200) {
                set((state) => ({
                    post: {
                        ...state.post,
                        isPostLoading: false,
                    },
                }));
            } else {
                set((state) => ({
                    post: {
                        ...state.post,
                        error: data.message,
                        isPostLoading: false,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                post: {
                    ...state.post,
                    error: err,
                    isPostLoading: false,
                },
            }));
        }
    },
    createPost: async (title, content, sharedWithUsers) => {
        const axiosInstance = await createAxiosInstance();
        try {
            set((state) => ({
                post: {
                    ...state.post,
                    isPostLoading: true,
                },
            }));
            const response = await axiosInstance.post(
                '/post',
                {
                    title,
                    content,
                    sharedWithUsers,
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
                    post: {
                        ...state.post,
                        isPostLoading: false,
                    },
                }));
            } else {
                set((state) => ({
                    post: {
                        ...state.post,
                        error: data.message,
                        isPostLoading: false,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                post: {
                    ...state.post,
                    error: err,
                    isPostLoading: false,
                },
            }));
        }
    },
    updatePost: async (id, title, content) => {
        const axiosInstance = await createAxiosInstance();
        try {
            set((state) => ({
                post: {
                    ...state.post,
                    isPostLoading: true,
                },
            }));
            const response = await axiosInstance.put(
                '/post/update',
                {
                    id,
                    title,
                    content,
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
                    post: {
                        ...state.post,
                        isPostLoading: false,
                    },
                }));
            } else {
                set((state) => ({
                    post: {
                        ...state.post,
                        error: data.message,
                        isPostLoading: false,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                post: {
                    ...state.post,
                    error: err,
                    isPostLoading: false,
                },
            }));
        }
    },
    clearPostError: () => {
        set((state) => ({
            post: {
                ...state.post,
                error: null,
            },
        }));
    },
});
