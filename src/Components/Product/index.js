import React from 'react'
import './styles.css'

const Product = ({product}) => {
	return (
		<div className='card'>
			<img src={product.image} alt="algo"/>
			<h3>{product.title}</h3>
		</div>
	)
}

export default Product