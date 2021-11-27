import React from 'react'
import './styles.css'
import { Link } from "react-router-dom"

const Product = ({product}) => {
	return (
		<div className='card'>
			<h3>{product.title}</h3>
			<img src={product.image} alt="algo"/>
			<div>${product.price} Precio Ahora</div>
			<Link to={`product/${product.id}`}>
				<button>Ver detalle =></button>
			</Link>
		</div>
	)
}

export default Product