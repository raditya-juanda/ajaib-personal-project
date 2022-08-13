import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { FilterContextProvider } from '../../../context/filter'

import TablePagination from '../index'

describe('<TableFilters />', () => {
	it('should render properly', () => {
		const { getByPlaceholderText, getByText } = render(
			<FilterContextProvider>
				<TablePagination />
			</FilterContextProvider>,
		)
		expect(getByPlaceholderText('Input search...')).toBeInTheDocument()
		expect(document.querySelector('.ant-select')).toBeInTheDocument()
		expect(getByText('Reset Filter')).toBeInTheDocument()
	})

	test('search input should correctly set value onChange', () => {
		const { getByPlaceholderText } = render(
			<FilterContextProvider>
				<TablePagination />
			</FilterContextProvider>,
		)
		const input = getByPlaceholderText('Input search...')
		fireEvent.change(input, { target: { value: 'asd' } })

		expect(input.value).toBe('asd')
	})
})
