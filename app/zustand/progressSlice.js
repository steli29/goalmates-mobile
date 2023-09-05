import { createAxiosInstance } from '../project/api/helpers';

export const createProgressSlice = (set) => ({
    progress: {
        data: null,
        error: null,
    },
    setProgress: async (postUpdatesId, userId, progress) => {
        const axiosInstance = await createAxiosInstance();
        try {
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
    getProgress: async (userId, postUpdateId) => {
        const axiosInstance = await createAxiosInstance();
        try {
            const response = await axiosInstance.get('/progress/', {
                params: {
                    userId,
                    postUpdateId,
                }
            });

            const { data } = response;
            if(response.status === 200) {
                return data;
            } 
            return null;
        } catch (err) {
            return null;
        }
    }
});
