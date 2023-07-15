import { protectedFetch } from '../project/api/helpers';

export const createSearchUsersSlice = (set) => ({
    searchResults: {
        data: [],
        error: null,
        isSearchResultsLoading: false,
    },
    searchUsers: async (queryString) => {
        try {
            set((state) => ({
                searchResults: {
                    ...state.searchResults,
                    isSearchResultsLoading: true,
                },
            }));
            const response = await protectedFetch(
                `/user/search?${new URLSearchParams({
                    name: queryString,
                })}`,
                'GET'
            );

            const data = await response.json();
            if (response.status === 200) {
                set((state) => ({ 
                    searchResults: { 
                        ...state.searchResults,
                        isSearchResultsLoading: false,
                        data
                    } 
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
