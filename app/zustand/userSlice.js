import { HOSTNAME } from '../project/api/constants';

export const createUserSlice = (set, get) => ({
	user: {},
	error: '',
	register: async ({ email, password, firstName, lastName, userName }) => {
		try {
			if (!email || !password || !firstName || !lastName || !userName) {
				throw new Error('Fields must not be empty!');
			}

			const response = await fetch(`${HOSTNAME}/auth/register`, {
				method: 'POST',
				body: JSON.stringify({
					email,
					password,
					firstName,
					lastName,
					userName,
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const token = await response.json();
			set({ user: token });
		}
		catch (err) {
			set({ error: err.message });
		}
	},
	login: async ({ email, password }) => {
		try {
			if (!email || !password) {
				throw new Error('Fields must not be empty!');
			}
			const response = await fetch(`${HOSTNAME}/auth/authenticate`, {
				method: 'POST',
				body: JSON.stringify({
					email,
					password
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});
			if(response.status === 200) {
				const token = await response.json();
				set({ user: token });
			} else {
				throw new Error ('No such user!');
			}
		} catch (err) {
			set({ error: err.message });
		}
	},
	clearError: () => set({ error: '' })
});
