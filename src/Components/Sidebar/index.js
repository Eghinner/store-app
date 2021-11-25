import React, { useContext } from 'react'
import './styles.css'
import { ProductsContext } from '../../Context/ProductsContext.js'

const Sidebar = () => {

	const {getCategories} = useContext(ProductsContext)

	const handleChange = e => {
		const { name, value } = e.target
		getCategories(value)
	}

	return (
		<aside>
			<h3>Category</h3>
			<form>
				<div>
					<input
						checked={true}
						onChange={handleChange}
						value="all"
						id="all"
						type="radio"
						name="categories"
					/>
					<label>All</label>
				</div>
				<div>
					<input
						value="electronics"
						id="electronics"
						type="radio"
						name="categories"
						onChange={handleChange}
					/>
					<label>Electronics</label>
				</div>
				<div>
					<input
						value="jewelery"
						id="jewelery"
						type="radio"
						name="categories"
						onChange={handleChange}
					/>
					<label>Jewelery</label>
				</div>
				<div>
					<input
						value="men's clothing"
						id="men"
						type="radio"
						name="categories"
						onChange={handleChange}
					/>
					<label>Men's clothing</label>
				</div>
				<div>
					<input
						value="women's clothing"
						id="women"
						type="radio"
						name="categories"
						onChange={handleChange}
					/>
					<label>Women's clothing</label>
				</div>
			</form>
			</aside>
			)
}

export default Sidebar