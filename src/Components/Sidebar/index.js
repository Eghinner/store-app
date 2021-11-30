import React, { useContext, useEffect } from 'react'
import './styles.css'
import { ProductsContext } from '../../Context/ProductsContext.js'
// import {filterNodeList} from '../../Config/filterNode.js'

const Sidebar = () => {

	const {getCategories, category} = useContext(ProductsContext)

	const nodo = document.querySelectorAll('input[type=radio]')

	useEffect(() => {
		for (var i = nodo.length - 1; i >= 0; i--) {
			if (category === nodo[i].value) {
				nodo[i].parentNode.classList.add("mystyle")
			} else {
				nodo[i].parentNode.classList.remove("mystyle")
			}
		}
	}, [category, nodo])

	const handleChange = e => {
		const {value} = e.target
		getCategories(value)
	}

	return (
		<aside>
			<h3 className='h3'>Category</h3>
			<form className="form-side">
				<label className="label">
					<input
						className="label__input"
						onChange={handleChange}
						value=""
						id="all"
						type="radio"
						name="categories"
					/>
					<div className="label__circle">
						<div className="label__radio label__radio--selected"></div>
					</div>
					All
				</label>
				<label className="label">
					<input
						className="label__input"
						value="electronics"
						id="electronics"
						type="radio"
						name="categories"
						onChange={handleChange}
					/>
					<div className="label__circle"></div>
					Electronics
				</label>
				<label className="label">
					<input
						className="label__input"
						value="jewelery"
						id="jewelery"
						type="radio"
						name="categories"
						onChange={handleChange}
					/>
					<div className="label__circle"></div>
					Jewelery
				</label>
				<label className="label">
					<input
						className="label__input"
						value="men's clothing"
						id="men"
						type="radio"
						name="categories"
						onChange={handleChange}
					/>
					<div className="label__circle"></div>
					Men's clothing
				</label>
				<label className="label">
					<input
						className="label__input"
						value="women's clothing"
						id="women"
						type="radio"
						name="categories"
						onChange={handleChange}
					/>
					<div className="label__circle"></div>
					Women's clothing
				</label>
			</form>
			</aside>
			)
}

export default Sidebar