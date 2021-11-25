import React, { useEffect, useContext} from 'react'
import './styles.css'
import ClienteAxios from '../../Config/ClienteAxios.js'
import Product from '../Product'
import {ProductsContext} from '../../Context/ProductsContext.js'

const Products = () => {

	const { getProducts, products, category } = useContext(ProductsContext)

	useEffect(() => {
		getProducts()
	}, [category])

	return (
		<div className='list-product'>
			{
				products.map(product=>(
					<Product
						key={product.id}
						product={product}
					/>
				))
			}
		</div>
	)
}

export default Products