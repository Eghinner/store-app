import React, { useContext, useEffect } from 'react'
import styles from './styles.module.css'
import Product from '../Product'
import {ProductsContext} from '../../Context/ProductsContext.js'
import PlaceholderProducts from '../Placeholder/PlaceholderProducts'
import { useSearchParams } from 'react-router-dom'

const Products = () => {

	const [searchParams] = useSearchParams()

	const hasquerysearch = searchParams.has('q')
	const hasqueryrate = searchParams.has('rate')
	const hascategory = searchParams.has('category')

	const querysearch = searchParams.get('q')
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
	}, [getProducts])

	useEffect(() => {
		updateProducts()
	}, [querysearch, queryrate, category, products, updateProducts])



	useEffect(() => {
		getSort()
	}, [getSort, querysort])



	return (
		<React.Fragment>

			<div className={styles.list_product}>
				{	(hascategory&&hasqueryrate)&&productsfilter.length===0
					?<div className={styles.alert}>There are no articles in this category.</div>
					:null
				}
				{
					hasquerysearch
					?
					<div className={styles.alert}>
						{productsfilter.length===0?'No results for ': 'Results for '}
						<span className={styles.searchquery}>{querysearch}</span>
					</div>
					:null
				}
				{loading
					?
					<>
						<PlaceholderProducts/>
					</>
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