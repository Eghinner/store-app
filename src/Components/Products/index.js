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
	const hasqueryrate = searchParams.has('rate')
	// const categoryurlquery = searchParams.get('category')
	const queryrate = searchParams.get('rate')

	const {
		loading,
		products,
		category,
		sort,
		// rate,
		productsfilter,
		updateProducts,
		// filterRateProducts,
		getProducts,
		getSort
	} = useContext(ProductsContext)

	// function sortProd(argument) {
	// 	argument.sort((a, b) => b.price - a.price)
	// }
	// function sortProdu(argument) {
	// 	argument.sort((a, b) => a.rating.rate - b.rating.rate)
	// }
	// function sortReset(argument) {
	// 	argument.sort((a, b) => a.id - b.id)
	// }

	useEffect(() => {
		getProducts()
	// eslint-disable-next-line
	}, [categorysearch])

	useEffect(() => {
		getSort()
	// eslint-disable-next-line
	}, [sort])

	// if (sort.trim()==='') {
		// sortReset(products)
	// }
	// if (sort.trim()==='price') {
	// 	sortProd(products)
	// }
	// if (sort.trim()==='rate') {
		// sortProdu(products)
	// }

	useEffect(() => {
		updateProducts()
	// eslint-disable-next-line
	}, [
	querysearch,
	queryrate,
	category,
	products
	])

	// useEffect(() => {
	// 	// getProducts()
	// 	filterRateProducts()
	// }, [
	// 	queryrate,
	//  	categoryurlquery,
	//  	products
	// ])

	return (
		<React.Fragment>

			<div className='list-product'>
				{}
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