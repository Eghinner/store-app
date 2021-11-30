import React, {useEffect, useContext} from 'react'
import Banner from '../Banner'
import Search from '../Search'
import Products from '../Products'
import Sidebar from '../Sidebar'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { ProductsContext } from '../../Context/ProductsContext.js'

const Home = () => {

	let navigate = useNavigate()

	const {category, searchstring} = useContext(ProductsContext)

	const [searchParams, setSearchParams] = useSearchParams()

	useEffect(() => {
		if (category.trim()==='' && searchstring.trim()==='') {
			navigate('/')
		} else {
			if (category.trim()==='') {
				setSearchParams({'q':searchstring})
			} else if (searchstring.trim()==='') {
				setSearchParams({'category':category})
			} else {
				setSearchParams({'category':category, 'q':searchstring})
			}
		}
	// eslint-disable-next-line
	}, [category, searchstring, searchParams])

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