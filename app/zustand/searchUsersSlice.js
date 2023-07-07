import { protectedFetch } from '../project/api/helpers';

export const createSearchUsersSlice = (set) => ({
    searchResults: {
        data: [],
        error: null,
    },
    searchUsers: async (queryString) => {
        try {
            const response = await protectedFetch(
                `/user/search?${new URLSearchParams({
                    name: queryString,
                })}`,
                'GET'
            );

            const data = await response.json();
            if (response.status === 200) {
                set((state) => ({ searchResults: { ...state.searchResults, data } }));
            } else {
                set((state) => ({
                    searchResults: {
                        ...state.searchResults,
                        error: data.message,
                    },
                }));
            }
        } catch (err) {
            set((state) => ({
                searchResults: {
                    ...state.searchResults,
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
            },
        });
    },
});
