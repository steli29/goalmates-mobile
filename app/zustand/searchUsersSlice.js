import { createAxiosInstance } from '../project/api/helpers';

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
                set((state) => ({
                    searchResults: {
                        ...state.searchResults,
                        isSearchResultsLoading: false,
                        data,
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
