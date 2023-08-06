import { createAxiosInstance } from '../project/api/helpers';
import { convertBase64ToImage } from '../project/helpers/helper-functions';

export const createSearchUsersSlice = (set) => ({
    searchResults: {
        data: [],
        error: null,
        isSearchResultsLoading: false,
    },
    searchUsers: async (name) => {
        const instance = await createAxiosInstance();
        try {
            set((state) => ({
                searchResults: {
                    ...state.searchResults,
                    isSearchResultsLoading: true,
                },
            }));
            const response = await instance.get('/user/search', {
                params: {
                    name,
                },
            });

            const { data } = response;
            if (response.status === 200) {
                const mappedData = data.map((user) => {
                    if(user.image) {
                        user.image = convertBase64ToImage(user.image);
                    }
                    return user;
                });
                set((state) => ({
                    searchResults: {
                        ...state.searchResults,
                        isSearchResultsLoading: false,
                        data: mappedData,
                    },
                }));
            } else {
                set((state) => ({
                    searchResults: {
                        ...state.searchResults,
                        isSearchResultsLoading: false,
                        error: data.message,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                searchResults: {
                    ...state.searchResults,
                    isSearchResultsLoading: false,
                    error: err.message,
                },
            }));
        }
    },
    clearResults: () => {
        set({
            searchResults: {
                data: null,
                error: null,
                isSearchResultsLoading: false,
            },
        });
    },
});
