import { filterActions, filterReducer } from '../index'

describe('filterReducer', () => {
	test('action.type SET_FILTER should update filter state', () => {
		expect(
			filterReducer(
				{
					filter: {
						keyword: '',
						gender: 'all',
						page: 1,
						results: 10,
					},
				},
				{
					type: filterActions.SET_FILTER,
					payload: { filter: { page: 3 } },
				},
			),
		).toStrictEqual({ filter: { keyword: '', gender: 'all', page: 3, results: 10 } })
	})

	test('action.type SET_FILTER should reset page to 1 if payload does not contains page property', () => {
		expect(
			filterReducer(
				{
					filter: {
						keyword: '',
						gender: 'all',
						page: 5,
						results: 10,
					},
				},
				{
					type: filterActions.SET_FILTER,
					payload: { filter: { keyword: 'efg' } },
				},
			),
		).toStrictEqual({ filter: { keyword: 'efg', gender: 'all', page: 1, results: 10 } })

		expect(
			filterReducer(
				{
					filter: {
						keyword: '',
						gender: 'all',
						page: 5,
						results: 10,
					},
				},
				{
					type: filterActions.SET_FILTER,
					payload: { filter: { keyword: 'efg', page: 5 } },
				},
			),
		).toStrictEqual({
			filter: { keyword: 'efg', gender: 'all', page: 5, results: 10 },
		})
	})
})
