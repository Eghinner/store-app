import React, { useState, useContext, useEffect } from 'react'
import './styles.css'
import {ProductsContext} from '../../Context/ProductsContext.js'
import { useSearchParams } from 'react-router-dom'

const Search = () => {

	const [tosearch, setToSearch] = useState('')

	const [searchParams, setSearchParams] = useSearchParams()

	const querysearch = searchParams.get('q')

	useEffect(() => {
		searchParams.has('q')&&setToSearch(querysearch)
		// eslint-disable-next-line
	}, [querysearch])

	const {
		setSearch
		// searchstring
		// products
	} = useContext(ProductsContext)

	// console.log(products.sort(function (a, b) {
	// 	if (a.title > b.title) {
	// 		return 1;
	// 	}
	// 	if (a.title < b.title) {
	// 		return -1;
	// 	}
	// 	return 0;
	// }))

	const handleChange = e => {
		const {value} = e.target
		setToSearch(
			value
			)
		setSearch(value)
	}

	const handleOnChange = e => {
		e.preventDefault()
	}

	const selectChange = e => {
		const {value} = e.target
		const currentParams = Object.fromEntries([...searchParams])
		currentParams.sort = value
		// console.log(currentParams)
		setSearchParams(currentParams)
	}

	return (
		<React.Fragment>
			<div className='search'>
				<form
					onSubmit={handleOnChange}
				>
					<input
						onBlur={()=>setToSearch('')}
						onChange={handleChange}
						type="text"
						placeholder='Search'
						value={tosearch}
					/>
						<select onChange={selectChange}>
							<option value="defect">Defecto</option>
							<option value="rate">Rate</option>
							<option value="price">Price</option>
						</select>
				</form>
			</div>
		</React.Fragment>
	)
}

export default Search