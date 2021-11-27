import React, { useEffect, useContext} from 'react'
import './styles.css'
import Product from '../Product'
import {ProductsContext} from '../../Context/ProductsContext.js'
import Spinner from '../Spinner'
import { useSearchParams } from 'react-router-dom'

const Products = () => {

	const [searchParams] = useSearchParams()

	const q = searchParams.get('name')

	const { getProducts, products, category, loading, updateProducts, productsfilter } = useContext(ProductsContext)

	useEffect(() => {
		getProducts()
		// eslint-disable-next-line
	}, [category])

	// useEffect(() => {
	// 	q ?? updateProducts(q)
	// // eslint-disable-next-line
	// }, [q])

	return (
		<div className='list-product'>
			{loading
				?<Spinner/>
				: productsfilter.length > 0
					? productsfilter.map(product=>(
						<Product
							key={product.id}
							product={product}
						/>
					))
				: products.map(product=>(
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