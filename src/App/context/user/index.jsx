import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useReducer,
} from 'react'
import { node } from 'prop-types'
import dayjs from 'dayjs'
import { userActions, userReducer } from './reducers'
import { useFilterContextDispatch, useFilterContextValue } from '../filter'

const UserContextValue = createContext()
const UserContextDispatch = createContext()

const initialUserState = {
	users: [],
	isFetching: false,
	sort: {
		sortBy: '',
		sortType: '',
	},
}

const UserContextProvider = ({ children }) => {
	const { filter } = useFilterContextValue()
	const { setFilter } = useFilterContextDispatch()
	const [state, dispatch] = useReducer(userReducer, initialUserState)

	const fetchUsers = (params) => {
		dispatch({ type: userActions.FETCH_START })
		const urlParams = new URLSearchParams({
			...params,
			gender: params.gender === 'all' ? '' : params.gender,
			inc: 'login,name,email,gender,registered',
		})

		window
			.fetch(`https://randomuser.me/api/?${urlParams.toString()}`, {
				method: 'GET',
			})
			.then((res) => res.json())
			.then((res) => {
				if (res && res.results) {
					dispatch({
						type: userActions.SET_USERS,
						payload: {
							users: res.results.map((user) => ({
								username: user.login.username,
								name: `${user.name.first} ${user.name.last}`,
								email: user.email,
								gender: user.gender,
								registeredDate: dayjs(
									user.registered.date.replace('T', ' ').replace('Z', ''),
								).format('DD-MM-YYYY HH:mm'),
							})),
						},
					})
				}
			})
			.catch((err) => {
				console.error(err)
			})
			.finally(() => {
				dispatch({ type: userActions.FETCH_END })
			})
	}

	const setSort = useCallback(
		(sort) => {
			dispatch({ type: userActions.SET_SORT, payload: { sort } })
			if (filter.page !== 1) {
				setFilter({ page: 1 })
			}
		},
		[filter.page, setFilter],
	)

	useEffect(() => {
		fetchUsers({ ...filter, ...state.sort })
	}, [filter, state.sort])

	const memoizedDispatch = useMemo(
		() => ({
			setSort,
		}),
		[setSort],
	)

	return (
		<UserContextDispatch.Provider value={memoizedDispatch}>
			<UserContextValue.Provider value={state}>{children}</UserContextValue.Provider>
		</UserContextDispatch.Provider>
	)
}

UserContextProvider.propTypes = {
	children: node.isRequired,
}

const useUserContextDispatch = () => useContext(UserContextDispatch)
const useUserContextValue = () => useContext(UserContextValue)

export { UserContextProvider, useUserContextDispatch, useUserContextValue }
