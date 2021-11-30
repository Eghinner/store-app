import React, { useContext, useEffect } from 'react'
import './styles.css'
import Product from '../Product'
import {ProductsContext} from '../../Context/ProductsContext.js'
import Spinner from '../Spinner'
import { useSearchParams } from 'react-router-dom'

const Products = () => {

	const [searchParams] = useSearchParams()

	// const categoryurlquery = searchParams.has('category')
	const hasquerysearch = searchParams.has('q')
	const querysearch = searchParams.get('q')
	const categorysearch = searchParams.get('category')

	const {
		getProducts,
		products,
		category,
		loading,
		productsfilter,
		updateProducts
	} = useContext(ProductsContext)

	// Obtener products una unica vez
	useEffect(() => {
		getProducts()
	// eslint-disable-next-line
	}, [
	categorysearch
	// category
	])

	useEffect(() => {
		// if (hasquerysearch||categoryurlquery) {
			updateProducts()
		// }
	// eslint-disable-next-line
	}, [
	searchParams,
	category,
	products
	])

	return (
		<React.Fragment>

			<div className='list-product'>
				{
					hasquerysearch
					?<div className='alert'>
					{productsfilter.length===0?'No hay resultados de ': 'Resultados de '}
					<span>{querysearch}</span></div>
					:null
				}
				{loading
					?<Spinner/>
					: (querysearch)
					? (productsfilter)
					.map(product=>(
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
		</React.Fragment>
	)
}

export default Products