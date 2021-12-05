import React, {useEffect, useContext} from 'react'
import Search from '../Search'
import Products from '../Products'
import Sidebar from '../Sidebar'
import { useSearchParams } from 'react-router-dom'
import { ProductsContext } from '../../Context/ProductsContext.js'
import {AddUrlQuery} from '../../Config/useUrlSearchParams.js'

const Home = () => {

	const {
		category,
	 	searchstring,
	 	rate,
	 	sort
	} = useContext(ProductsContext)

	const [searchParams, setSearchParams] = useSearchParams()

	useEffect(() => {
		setSearchParams(AddUrlQuery(category, searchstring, rate, sort))
	// eslint-disable-next-line
	}, [category, searchstring, rate, sort, searchParams])

	return (
		<React.Fragment>

			<Search/>
			<div className="contenedor">
				<Sidebar/>
				<Products/>
			</div>
		</React.Fragment>
	)
}

export default Home