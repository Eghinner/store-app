import React, { useContext, useEffect } from 'react'
import './styles.css'
import Product from '../Product'
import {ProductsContext} from '../../Context/ProductsContext.js'
import Spinner from '../Spinner'
import { useSearchParams } from 'react-router-dom'

const Products = () => {

	const [searchParams] = useSearchParams()

	const hasquerysearch = searchParams.has('q')
	const hasqueryrate = searchParams.has('rate')

	const querysearch = searchParams.get('q')
	const categorysearch = searchParams.get('category')
	const queryrate = searchParams.get('rate')
	const querysort = searchParams.get('sort')

	const {
		loading,
		products,
		category,
		productsfilter,
		updateProducts,
		getProducts,
		getSort
	} = useContext(ProductsContext)

	useEffect(() => {
		getProducts()
	// eslint-disable-next-line
	}, [categorysearch])

	useEffect(() => {
		getSort()
	// eslint-disable-next-line
	}, [querysort])

	useEffect(() => {
		updateProducts()
	// eslint-disable-next-line
	}, [
	querysearch,
	queryrate,
	category,
	products
	])

	return (
		<React.Fragment>

			<div className='list-product'>
				{
					hasquerysearch
					?
					<div className='alert'>
						{productsfilter.length===0?'No hay resultados de ': 'Resultados de '}
						<span className="searchquery">{querysearch}</span>
					</div>
					:null
				}
				{loading
					?<Spinner/>
					: (
						hasquerysearch
						||
					 	hasqueryrate
					 )
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