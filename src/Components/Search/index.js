import React, { useState, useContext } from 'react'
import './styles.css'
import {ProductsContext} from '../../Context/ProductsContext.js'

const Search = () => {

	const { setSearch,
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



	const [tosearch, setToSearch] = useState('')

	const handleChange = e => {
		const {value} = e.target
		setToSearch(value)
		setSearch(value)
	}

	const handleOnChange = e => {
		e.preventDefault()
	}

	const selectChange = e => {

	}

	return (
		<React.Fragment>
			<div className='search'>
				<form
					onSubmit={handleOnChange}
				>
					<input
						onChange={handleChange}
						type="text"
						placeholder='Search'
						value={tosearch}
					/>
						<select onChange={selectChange}>
							<option defaultValue value="defect">Defecto</option>
							<option value="rate">Rate</option>
							<option value="price">Price</option>
						</select>
				</form>
			</div>
		</React.Fragment>
	)
}

export default Search