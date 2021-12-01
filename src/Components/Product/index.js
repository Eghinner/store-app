import React from 'react'
import './styles.css'
import { useNavigate } from "react-router-dom"

const Product = ({product}) => {

	const {rating} = product

	let navigate = useNavigate()

	const goTo = () => {
		navigate(`${product.id}`)
	}

	return (
		<div className='card'>
			<h3>{product.title}</h3>
			<img className='img' src={product.image} alt="algo"/>
			<div className="want">
				<div className='price-tag'>${product.price}</div>
				<div className="rating">
					<span className="fa fa-star checked"></span>
					{rating.rate}
				</div>
			</div>
			<button className="btn" onClick={goTo}>Ver detalle =></button>
		</div>
	)
}

export default Product