import React, {useEffect, useContext} from 'react'
import Banner from '../Banner'
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

	// const currentParams = Object.fromEntries([...searchParams])
	// currentParams.sort = value //Agrega un nuevo key/value
	// setSearchParams(currentParams) //Agrega la actual y la nueva

	useEffect(() => {
		setSearchParams(AddUrlQuery(category, searchstring, rate, sort))
	// eslint-disable-next-line
	}, [category, searchstring, rate, sort, searchParams])

	// useEffect(() => {
		// if (
		// 	category.trim()===''
		// 	&&
		// 	searchstring.trim()===''
		// 	) {
		// 	navigate('/')
		// } else {

			// category.trim()!==''&&(currentParams.category = category)
			// searchstring.trim()!==''&&(currentParams.q = searchstring)
			// setSearchParams(currentParams)

			// if (category.trim()==='') {
			// 	setSearchParams({'q':searchstring})
			// } else if (searchstring.trim()==='') {
			// 	setSearchParams({'category':category})
			// } else {
			// 	setSearchParams({'category':category, 'q':searchstring})
			// }
		// }
	// eslint-disable-next-line
	// }, [category,
	//  	searchstring,
	//   	searchParams
	// ])

	return (
		<React.Fragment>
			<Banner/>
			<Search/>
			<div className="contenedor">
				<Sidebar/>
				<Products/>
			</div>
		</React.Fragment>
	)
}

export default Home