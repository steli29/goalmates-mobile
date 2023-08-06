import { createAxiosInstance } from '../project/api/helpers';
import { convertBase64ToImage } from '../project/helpers/helper-functions';

export const createFeedSlice = (set) => ({
    feed: {
        data: null,
        isLoading: false,
        error: null,
    },
    getFeedPosts: async (id) => {
        const axiosInstance = await createAxiosInstance();
        try {
            set((state) => ({
                feed: {
                    ...state.post,
                    isLoading: true,
                },
            }));
            const response = await axiosInstance.get('/post/feed/', {
                params: {
                    id,
                }
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
                })
                set((state) => ({
                    feed: {
                        ...state.post,
                        data: transformedData,
                        isLoading: false,
                    },
                }));
            } else {
                set((state) => ({
                    feed: {
                        ...state.post,
                        error: data.message,
                        isLoading: false,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                feed: {
                    ...state.post,
                    error: err,
                    isLoading: false,
                },
            }));
        }
    },
});
