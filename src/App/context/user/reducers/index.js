export const userActions = {
	FETCH_START: 'FETCH_START',
	FETCH_END: 'FETCH_END',
	SET_USERS: 'SET_USERS',
	SET_SORT: 'SET_SORT',
}

export const userReducer = (state, action) => {
	switch (action.type) {
		case userActions.FETCH_START:
			return { ...state, isFetching: true }
		case userActions.FETCH_END:
			return { ...state, isFetching: false }
		case userActions.SET_USERS:
			return { ...state, users: action.payload.users }
		case userActions.SET_SORT:
			return {
				...state,
				sort: { ...state.sort, ...action.payload.sort },
			}
		default:
			return state
	}
}
