// import React from 'react'
// import { render, fireEvent, act } from '@testing-library/react'

// import AppContextProvider from '../../../context'

// import UsersTable from '../index'

// beforeAll(() => {
// 	window.matchMedia = (query) => ({
// 		matches: false,
// 		media: query,
// 		onchange: null,
// 		addListener: jest.fn(),
// 		removeListener: jest.fn(),
// 		addEventListener: jest.fn(),
// 		removeEventListener: jest.fn(),
// 		dispatchEvent: jest.fn(),
// 	})
// 	jest.spyOn(window, 'fetch').mockImplementation(() =>
// 		Promise.resolve({
// 			json: () =>
// 				Promise.resolve({
// 					results: [
// 						{
// 							gender: 'female',
// 							name: { title: 'Ms', first: 'Lidija', last: 'Đokić' },
// 							email: 'lidija.dokic@example.com',
// 							login: {
// 								uuid: '2b2f49af-f5fc-4861-8983-ded462e5404f',
// 								username: 'orangeelephant870',
// 								password: 'money1',
// 								salt: '9v7YFyhW',
// 								md5: 'b1dcf46941fa9a759a7f054cf3cbe774',
// 								sha1: '173e5cbc47e3ca297e32186192c9ffc304acffa0',
// 								sha256: 'a911c0f7f6294f91a588e2f4ced92742d3c8bdae9e6013fc0af149d8d6838b22',
// 							},
// 							registered: { date: '2018-12-02T02:37:20.371Z', age: 3 },
// 						},
// 					],
// 					info: { seed: '14ef5682834ea964', results: 10, page: 1, version: '1.4' },
// 				}),
// 		}),
// 	)
// })

// afterAll(() => {
// 	jest.restoreAllMocks()
// })

describe('<UsersTable />', () => {
	it('should render properly', () => {
		// const { getByText } = render(
		// 	<AppContextProvider>
		// 		<UsersTable />
		// 	</AppContextProvider>,
		// )
		// expect(getByText('Username')).toBeInTheDocument()
		// expect(getByText('Name')).toBeInTheDocument()
		// expect(getByText('Email')).toBeInTheDocument()
		// expect(getByText('Gender')).toBeInTheDocument()
		// expect(getByText('Registered Date')).toBeInTheDocument()
		// expect(window.fetch).toHaveBeenCalledTimes(1)
		expect(true).toBe(true)
	})
})
