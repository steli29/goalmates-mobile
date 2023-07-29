import { createAxiosInstance } from '../project/api/helpers';

export const createImageSlice = (set) => ({
    image: {
        success: null,
        error: null,
    },
    editImage: async (image) => {
        const instance = await createAxiosInstance();

        const formData = new FormData();
        formData.append('file', {
            type: image.type,
            name: image.fileName,
            uri: image.uri,
        });

        try {
            const response = await instance.post('/user/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'cache-control': 'no-cache',
                    Accept: 'application/json',
                },
            });
            const { data } = response;
            if (response.status === 200) {
                set((state) => ({
                    image: {
                        ...state.image,
                        success: false,
                    },
                }));
            } else {
                set((state) => ({
                    image: {
                        ...state.image,
                        error: data.error,
                    },
                }));
            }
        } catch (error) {
            set((state) => ({
                image: {
                    ...state.image,
                    error: error.error,
                },
            }));
        }
    },
});
