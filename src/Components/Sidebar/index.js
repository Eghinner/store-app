import React, { useContext } from 'react'
import './styles.css'
import { ProductsContext } from '../../Context/ProductsContext.js'
// import { useParams } from "react-router-dom"
import { useSearchParams } from 'react-router-dom'


const Sidebar = (props) => {

	const [searchParams] = useSearchParams()

	const q = searchParams.get('name')

	const {getCategories} = useContext(ProductsContext)

	const handleChange = e => {
		const { value } = e.target
		getCategories(value)
	}

	return (
		<aside>
			{q ? <p>`Search results to <span>{q}</span>`</p>:null}
			<h3>Category</h3>
			<form>
				<div>
					<input
						onChange={handleChange}
						value="all"
						id="all"
						type="radio"
						name="categories"
					/>
					<label htmlFor="all">All</label>
				</div>
				<div>
					<input
						value="electronics"
						id="electronics"
						type="radio"
						name="categories"
						onChange={handleChange}
					/>
					<label htmlFor="electronics">Electronics</label>
				</div>
				<div>
					<input
						value="jewelery"
						id="jewelery"
						type="radio"
						name="categories"
						onChange={handleChange}
					/>
					<label htmlFor="jewelery">Jewelery</label>
				</div>
				<div>
					<input
						value="men's clothing"
						id="men"
						type="radio"
						name="categories"
						onChange={handleChange}
					/>
					<label htmlFor="men">Men's clothing</label>
				</div>
				<div>
					<input
						value="women's clothing"
						id="women"
						type="radio"
						name="categories"
						onChange={handleChange}
					/>
					<label htmlFor="women">Women's clothing</label>
				</div>
			</form>
			</aside>
			)
}

export default Sidebar