export const filterActions = {
	SET_FILTER: 'SET_FILTER',
}

export const filterReducer = (state, action) => {
	switch (action.type) {
		case filterActions.SET_FILTER:
			return {
				...state,
				filter: {
					...state.filter,
					...action.payload.filter,
					page: action.payload.filter.page || 1,
				},
			}
		default:
			return state
	}
}
