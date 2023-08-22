import { createAxiosInstance } from '../project/api/helpers';

export const createUpdatesSlice = (set) => ({
    updates: {
        data: null,
        isLoading: false,
        error: null,
    },
    postUpdate: async (text, postId, userId, title, image) => {
        const formData = new FormData();

        if (image) {
            formData.append('file', {
                type: image.type,
                name: image.fileName,
                uri: image.uri,
            });
        }

        formData.append(
            'dto',
            JSON.stringify({
                text,
                postId,
                userId,
                title,
            })
        );

        const axiosInstance = await createAxiosInstance();
        try {
            set((state) => ({
                updates: {
                    ...state.updates,
                    isLoading: true,
                },
            }));
            const response = await axiosInstance.post('/update', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'cache-control': 'no-cache',
                    Accept: 'application/json',
                },
            });
            const { data } = response;
            if (response.status === 200) {
                set((state) => ({
                    updates: {
                        ...state.updates,
                        isLoading: false,
                    },
                }));
            } else {
                set((state) => ({
                    updates: {
                        ...state.updates,
                        error: data.message,
                        isLoading: false,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                updates: {
                    ...state.updates,
                    error: err,
                    isLoading: false,
                },
            }));
        }
    },
    getAllUpdates: async (id) => {
        const axiosInstance = await createAxiosInstance();
        try {
            set((state) => ({
                updates: {
                    ...state.updates,
                    isLoading: true,
                },
            }));
            const response = await axiosInstance.get('/update/findAll/', {
                params: {
                    id,
                },
            });
            const { data } = response;
            if (response.status === 200) {
                set((state) => ({
                    updates: {
                        ...state.updates,
                        data,
                        isLoading: false,
                    },
                }));
            } else {
                set((state) => ({
                    updates: {
                        ...state.updates,
                        error: data.message,
                        isLoading: false,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                updates: {
                    ...state.updates,
                    error: err,
                    isLoading: false,
                },
            }));
        }
    },
});
