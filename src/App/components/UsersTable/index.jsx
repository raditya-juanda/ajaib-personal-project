import React from 'react'
import { Table } from 'antd'

import { useUserContextDispatch, useUserContextValue } from '../../context/user'

const tableColumns = [
	{
		title: 'Username',
		dataIndex: 'username',
		key: 'username',
		sorter: true,
	},
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		sorter: true,
	},
	{
		title: 'Email',
		dataIndex: 'email',
		key: 'email',
		sorter: true,
	},
	{
		title: 'Gender',
		dataIndex: 'gender',
		key: 'gender',
		sorter: true,
	},
	{
		title: 'Registered Date',
		dataIndex: 'registeredDate',
		key: 'registeredDate',
		sorter: true,
	},
]

const UsersTable = () => {
	const { isFetching, users } = useUserContextValue()
	const { setSort } = useUserContextDispatch()

	const handleSortTable = (pagination, filters, sorter) => {
		setSort({
			sortBy: sorter.order ? sorter.field : '',
			sortType: sorter.order || '',
		})
	}

	return (
		<Table
			columns={tableColumns}
			dataSource={users}
			loading={isFetching}
			pagination={false}
			onChange={handleSortTable}
		/>
	)
}

export default UsersTable
