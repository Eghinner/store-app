import React, { useState } from 'react'
import './styles.css'
// import {ProductsContext} from '../../Context/ProductsContext.js'
import { useNavigate } from 'react-router-dom'

const Search = () => {

	let navigate = useNavigate()

	// const { setSearch } = useContext(ProductsContext)

	const [tosearch, setToSearch] = useState('')

	const handleChange = e => {
		setToSearch(
			// ...tosearch,
			e.target.value
		)
	}

	const handleSubmit = e => {
		e.preventDefault()
		// setSearch(tosearch)
		navigate(`/?name=${tosearch}`)
		setToSearch('')
	}

	return (
		<React.Fragment>
			<div className='search'>
				<form
					onSubmit={handleSubmit}
				>
					<input
						onChange={handleChange}
						type="text"
						placeholder='Search'
						value={tosearch}
					/>
					<input type="submit"/>
				</form>
			</div>
		</React.Fragment>
	)
}

export default Search