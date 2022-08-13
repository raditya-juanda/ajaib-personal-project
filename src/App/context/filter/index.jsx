import React, { createContext, useContext, useMemo, useReducer } from 'react'
import { node } from 'prop-types'
import { filterActions, filterReducer } from './reducers'

export const FilterContextDispatch = createContext()
export const FilterContextValue = createContext()

const initialFilterState = {
	filter: {
		keyword: '',
		gender: 'all',
		page: 1,
		results: 10,
	},
}

export const FilterContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(filterReducer, initialFilterState)

	const setFilter = (filter) => {
		dispatch({ type: filterActions.SET_FILTER, payload: { filter } })
	}

	const memoizedDispatch = useMemo(
		() => ({
			setFilter,
		}),
		[],
	)

	return (
		<FilterContextDispatch.Provider value={memoizedDispatch}>
			<FilterContextValue.Provider value={state}>{children}</FilterContextValue.Provider>
		</FilterContextDispatch.Provider>
	)
}

FilterContextProvider.propTypes = {
	children: node.isRequired,
}

export const useFilterContextDispatch = () => useContext(FilterContextDispatch)
export const useFilterContextValue = () => useContext(FilterContextValue)
