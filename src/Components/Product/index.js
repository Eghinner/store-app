import React from 'react'
import './styles.css'
import { Link, useNavigate } from "react-router-dom"

const Product = ({product}) => {

	let navigate = useNavigate()

	const goTo = () => {
		navigate(`${product.id}`)
	}

	return (
		<div className='card'>
			<h3>{product.title}</h3>
			<img className='img' src={product.image} alt="algo"/>
			<div>${product.price} Precio Ahora</div>
			<button onClick={goTo}>Ver detalle =></button>
		</div>
	)
}

export default Product