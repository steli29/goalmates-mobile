import { createAxiosInstance } from '../project/api/helpers';

export const createProgressSlice = (set) => ({
    progress: {
        data: null,
        error: null,
    },
    setProgress: async (postUpdatesId, userId, progress) => {
        const axiosInstance = await createAxiosInstance();
        try {
            set((state) => ({
                post: {
                    ...state.post,
                    isPostLoading: true,
                },
            }));
            const response = await axiosInstance.post('/progress', {
                postUpdatesId,
                userId,
                progress,
            });

            const { data } = response;
            if (response.status === 200) {
                set((state) => ({
                    progress: {
                        ...state.progress,
                        // data,
                    },
                }));
            } else {
                set((state) => ({
                    progress: {
                        ...state.progress,
                        error: data.message,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                progress: {
                    ...state.progress,
                    error: err,
                },
            }));
        }
    },
});
