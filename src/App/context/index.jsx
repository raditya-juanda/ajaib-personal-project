import React from 'react'
import { node } from 'prop-types'

import { FilterContextProvider } from './filter'
import { UserContextProvider } from './user'

const AppContextProvider = ({ children }) => {
	return (
		<FilterContextProvider>
			<UserContextProvider>{children}</UserContextProvider>
		</FilterContextProvider>
	)
}

AppContextProvider.propTypes = {
	children: node.isRequired,
}

export default AppContextProvider
