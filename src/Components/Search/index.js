import React, { useState, useContext, useEffect } from 'react'
import './styles.css'
import {ProductsContext} from '../../Context/ProductsContext.js'
import { useSearchParams } from 'react-router-dom'

const Search = () => {

	const [tosearch, setToSearch] = useState('')

	const [searchParams] = useSearchParams()

	const querysearch = searchParams.get('q')

	useEffect(() => {
		searchParams.has('q')&&setToSearch(querysearch)
		// eslint-disable-next-line
	}, [querysearch])

	const {
		setSearch,
		sortProds,
		sort
	} = useContext(ProductsContext)

	const nodo = document.querySelectorAll('option')

	useEffect(() => {
		for (var i = nodo.length - 1; i >= 0; i--) {
			if (sort === nodo[i].value) {
				nodo[i].selected = true
			}
		}
	}, [nodo, sort])

	const handleChange = e => {
		const {value} = e.target
		setToSearch(value)
		setSearch(value)
	}

	const handleOnsubmit = e => {
		e.preventDefault()
	}

	const selectChange = e => {
		const {value} = e.target
		sortProds(value)
	}


	// Vaciar input text en onBlur
	// onBlur={()=>setToSearch('')}

	return (
		<React.Fragment>
			<div className='search'>
				<form
					onSubmit={handleOnsubmit}
				>
					<input

						onChange={handleChange}
						type="text"
						placeholder='Search'
						value={tosearch}
					/>
						<select name="sort" onChange={selectChange}>
							<option value="">Defecto</option>
							<option value="price">Price</option>
							{
								// <option value="rate">Rate</option>
							}
						</select>
				</form>
			</div>
		</React.Fragment>
	)
}

export default Search