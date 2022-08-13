import React from 'react'

import AppContextProvider from './context'

import TableFilters from './components/TableFilters'
import UsersTable from './components/UsersTable'
import TablePagination from './components/TablePagination'

const App = () => {
	return (
		<AppContextProvider>
			<div className="p-4">
				<TableFilters />
				<UsersTable />
				<TablePagination />
			</div>
		</AppContextProvider>
	)
}

export default App
