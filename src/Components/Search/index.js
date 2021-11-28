import React, { useState, useContext } from 'react'
import './styles.css'
import {ProductsContext} from '../../Context/ProductsContext.js'

const Search = () => {

	const { setSearch } = useContext(ProductsContext)

	const [tosearch, setToSearch] = useState('')

	const handleChange = e => {
		const {value} = e.target
		setToSearch(value)
		setSearch(value)
	}

	const handleOnChange = e => {
		e.preventDefault()
		// if (tosearch.trim() === '') {
		// 	return
		// }
		// setToSearch('')
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
					{
						//<input type="submit"/>
					}
				</form>
			</div>
		</React.Fragment>
	)
}

export default Search