import { createAxiosInstance } from '../project/api/helpers';
import { convertBase64ToImage } from '../project/helpers/helper-functions';

export const createUserFeedSlice = (set) => ({
    posts: {
        data: null,
        isLoading: false,
        error: null,
    },
    getPostsByUser: async (id) => {
        const axiosInstance = await createAxiosInstance();
        try {
            set((state) => ({
                posts: {
                    ...state.post,
                    isLoading: true,
                },
            }));
            const response = await axiosInstance.get('/post/findAll/', {
                params: {
                    id,
                },
            });

            const { data } = response;
            if (response.status === 200) {
                const transformedData = data.map((post) => {
                    return {
                        ...post,
                        createdBy: {
                            ...post.createdBy,
                            image: convertBase64ToImage(post.createdBy.image),
                        }
                    }
                });
                set((state) => ({
                    posts: {
                        ...state.post,
                        data: transformedData,
                        isLoading: false,
                    },
                }));
            } else {
                set((state) => ({
                    posts: {
                        ...state.post,
                        error: data.message,
                        isLoading: false,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                posts: {
                    ...state.post,
                    error: err,
                    isLoading: false,
                },
            }));
        }
    },
});
