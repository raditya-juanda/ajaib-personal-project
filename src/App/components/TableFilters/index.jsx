import React, { useEffect, useRef, useState } from 'react'
import { Input, Button, Select } from 'antd'

import { useFilterContextDispatch, useFilterContextValue } from '../../context/filter'

const { Option } = Select
const { Search } = Input

const SearchInput = () => {
	const { setFilter } = useFilterContextDispatch()
	const { filter } = useFilterContextValue()
	const [searchInput, setSearchInput] = useState('')
	const debounceTimeoutRef = useRef(null)

	const handleSearch = () => {
		if (debounceTimeoutRef.current) {
			window.clearTimeout(debounceTimeoutRef.current)
			debounceTimeoutRef.current = null
		}
		debounceTimeoutRef.current = setTimeout(() => {
			debounceTimeoutRef.current = null
			setFilter({ ...filter, keyword: searchInput })
		}, 500)
	}

	useEffect(() => {
		setSearchInput(filter.keyword)
		return () => {
			window.clearTimeout(debounceTimeoutRef.current)
		}
	}, [filter.keyword])

	return (
		<Search
			placeholder="Input search..."
			enterButton
			onChange={(e) => setSearchInput(e.target.value)}
			value={searchInput}
			onSearch={handleSearch}
		/>
	)
}

const SelectGender = () => {
	const { setFilter } = useFilterContextDispatch()
	const { filter } = useFilterContextValue()

	const handleChangeGender = (gender) => {
		setFilter({ ...filter, gender })
	}

	return (
		<Select
			className="w-full"
			defaultValue="all"
			value={filter.gender}
			onChange={handleChangeGender}
		>
			<Option value="all">All</Option>
			<Option value="male">Male</Option>
			<Option value="female">Female</Option>
		</Select>
	)
}

const ResetButton = () => {
	const { setFilter } = useFilterContextDispatch()

	const handleClickReset = () => {
		setFilter({
			keyword: '',
			gender: 'all',
			page: 1,
			results: 10,
		})
	}

	return <Button onClick={handleClickReset}>Reset Filter</Button>
}

const TableFilters = () => {
	return (
		<div className="flex items-end mb-4">
			<div className="w-60 mr-2">
				<div>Search</div>
				<SearchInput />
			</div>
			<div className="w-40 mr-2">
				<div>Gender</div>
				<SelectGender />
			</div>
			<ResetButton />
		</div>
	)
}

export default TableFilters
