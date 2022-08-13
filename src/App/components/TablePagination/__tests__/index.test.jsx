import React from 'react'
import { render, fireEvent, act } from '@testing-library/react'

import { FilterContextProvider } from '../../../context/filter'

import TablePagination from '../index'

describe('<TablePagination />', () => {
	it('should render properly', () => {
		const { getByText } = render(
			<FilterContextProvider>
				<TablePagination />
			</FilterContextProvider>,
		)
		const [prevButton, nextButton] = document.querySelectorAll('button')
		expect(prevButton).toBeInTheDocument()
		expect(getByText('1')).toBeInTheDocument()
		expect(nextButton).toBeInTheDocument()
	})

	it('should correctly move to next page when next button is clicked', () => {
		const { getByText } = render(
			<FilterContextProvider>
				<TablePagination />
			</FilterContextProvider>,
		)
		const nextButton = document.querySelectorAll('button')[1]
		expect(getByText('1')).toBeInTheDocument()

		act(() => {
			fireEvent.click(nextButton)
		})

		expect(getByText('2')).toBeInTheDocument()
	})

	it('should correctly move to previous page when prev button is clicked', () => {
		const { getByText } = render(
			<FilterContextProvider>
				<TablePagination />
			</FilterContextProvider>,
		)
		const [prevButton, nextButton] = document.querySelectorAll('button')
		expect(getByText('1')).toBeInTheDocument()
		expect(prevButton.hasAttribute('disabled')).toBe(true)

		act(() => {
			fireEvent.click(nextButton)
		})
		expect(getByText('2')).toBeInTheDocument()
		expect(prevButton.hasAttribute('disabled')).toBe(false)

		act(() => {
			fireEvent.click(prevButton)
		})
		expect(getByText('1')).toBeInTheDocument()
		expect(prevButton.hasAttribute('disabled')).toBe(true)
	})
})
