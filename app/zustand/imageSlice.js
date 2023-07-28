import { protectedFetch } from '../project/api/helpers';
import { isAndroid } from '../project/constants';

export const createImageSlice = (set) => ({
    image: {
        success: null,
        error: null,
    },
    editImage: async (image) => {
        const formData = new FormData();
        formData.append('file', {
            type: 'image/jpeg',
            name: image.fileName,
            uri: isAndroid ? image.uri : image.uri.replace('file://', ''),
        });
        try {
            const response = await protectedFetch(
                'user/image',
                'post',
                {
                    'Content-Type': 'multipart/form-data',
                },
                formData
            );
            const data = await response.json();
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
