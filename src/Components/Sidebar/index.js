import React, { useContext, useEffect } from 'react'
import './styles.css'
import { ProductsContext } from '../../Context/ProductsContext.js'
// import {filterNodeList} from '../../Config/filterNode.js'

const Sidebar = () => {

	const {getCategories, category, setRate, rate} = useContext(ProductsContext)

	const nodo = document.querySelectorAll('input[type=radio]')

	useEffect(() => {
		for (var i = nodo.length - 1; i >= 0; i--) {
			if (category === nodo[i].value || rate === nodo[i].value) {
				nodo[i].parentNode.classList.add("mystyle")
			} else {
				nodo[i].parentNode.classList.remove("mystyle")
				nodo[i].checked = false
			}
		}
	}, [category, nodo, rate])

	const handleChangeCategory = e => {
		const {value} = e.target
		getCategories(value)
	}

	const handleChangeRate = e => {
		const {value} = e.target
		setRate(value)
	}

	return (
		<aside>
			<h3 className='h3'>Category</h3>
			<form className="form-side">
				<label className="label">
					<input
						className="label__input"
						onChange={handleChangeCategory}
						value=""
						type="radio"
						name="categories"
					/>
					<div className="label__circle"></div>
					All
				</label>
				<label className="label">
					<input
						className="label__input"
						value="electronics"
						type="radio"
						name="categories"
						onChange={handleChangeCategory}
					/>
					<div className="label__circle"></div>
					Electronics
				</label>
				<label className="label">
					<input
						className="label__input"
						value="jewelery"
						type="radio"
						name="categories"
						onChange={handleChangeCategory}
					/>
					<div className="label__circle"></div>
					Jewelery
				</label>
				<label className="label">
					<input
						className="label__input"
						value="men's clothing"
						type="radio"
						name="categories"
						onChange={handleChangeCategory}
					/>
					<div className="label__circle"></div>
					Men's clothing
				</label>
				<label className="label">
					<input
						className="label__input"
						value="women's clothing"
						type="radio"
						name="categories"
						onChange={handleChangeCategory}
					/>
					<div className="label__circle"></div>
					Women's clothing
				</label>


			</form>
			<h3 className='h3'>Rating</h3>
			<form className="form-side">
				<label className="label">
					<input
						className="label__input"
						onChange={handleChangeRate}
						value=""
						type="radio"
						name="rate"
					/>
					<div className="label__circle"></div>
					All
				</label>
				<label className="label">
					<input
						className="label__input"
						onChange={handleChangeRate}
						value="5"
						type="radio"
						name="rate"
					/>
					<div className="label__circle"></div>
					5 stars
				</label>
				<label className="label">
					<input
						className="label__input"
						value="4"
						type="radio"
						name="rate"
						onChange={handleChangeRate}
					/>
					<div className="label__circle"></div>
					4 stars
				</label>
				<label className="label">
					<input
						className="label__input"
						value="3"
						type="radio"
						name="rate"
						onChange={handleChangeRate}
					/>
					<div className="label__circle"></div>
					3 stars
				</label>
				<label className="label">
					<input
						className="label__input"
						value="2"
						type="radio"
						name="rate"
						onChange={handleChangeRate}
					/>
					<div className="label__circle"></div>
					2 stars
				</label>

			</form>
			</aside>
			)
}

export default Sidebar