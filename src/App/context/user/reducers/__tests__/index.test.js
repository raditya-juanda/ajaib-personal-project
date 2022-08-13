import { userActions, userReducer } from '../index'

const initialUserState = {
	users: [],
	isFetching: false,
	sort: {
		sortBy: '',
		sortType: '',
	},
}

describe('filterReducer', () => {
	test('action.type FETCH_START should set isFetching state to true', () => {
		expect(userReducer(initialUserState, { type: userActions.FETCH_START })).toStrictEqual({
			...initialUserState,
			isFetching: true,
		})
	})

	test('action.type FETCH_END should set isFetching state to false', () => {
		expect(
			userReducer({ ...initialUserState, isFetching: true }, { type: userActions.FETCH_END }),
		).toStrictEqual({
			...initialUserState,
			isFetching: false,
		})
	})

	test('action.type SET_USERS should set users state', () => {
		expect(
			userReducer(initialUserState, {
				type: userActions.SET_USERS,
				payload: { users: [{ name: 'a' }] },
			}),
		).toStrictEqual({
			...initialUserState,
			users: [{ name: 'a' }],
		})
	})

	test('action.type SET_SORT should set sort state', () => {
		expect(
			userReducer(initialUserState, {
				type: userActions.SET_SORT,
				payload: { sort: { sortBy: 'a', sortType: 'asc' } },
			}),
		).toStrictEqual({
			...initialUserState,
			sort: { sortBy: 'a', sortType: 'asc' },
		})
	})
})
