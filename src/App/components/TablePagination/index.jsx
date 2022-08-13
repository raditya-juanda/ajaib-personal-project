import React from 'react'
import { Button } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useFilterContextDispatch, useFilterContextValue } from '../../context/filter'

const TablePagination = () => {
	const { setFilter } = useFilterContextDispatch()
	const { filter } = useFilterContextValue()

	const handleChangePage = (page) => {
		setFilter({ ...filter, page })
	}

	return (
		<div className="flex justify-end mt-4">
			<Button
				disabled={filter.page === 1}
				className="w-8 px-1.5 py-0 mr-2"
				onClick={() => handleChangePage(filter.page - 1)}
			>
				<LeftOutlined className="text-xs" />
			</Button>
			<div className="w-8 h-8 flex items-center justify-center border border-solid border-[#1890ff] text-[#1890ff]">
				{filter.page}
			</div>
			<Button className="w-8 px-1.5 py-0 ml-2" onClick={() => handleChangePage(filter.page + 1)}>
				<RightOutlined className="text-xs" />
			</Button>
		</div>
	)
}

export default TablePagination
