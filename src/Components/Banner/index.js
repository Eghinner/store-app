import React, {useContext} from 'react'
import './styles.css'
import {ProductsContext} from '../../Context/ProductsContext.js'

const Home = () => {

	const {reseto} = useContext(ProductsContext)

	return (
		<div className='banner'>
			<h1 onClick={()=>reseto()} className='header'>My Store</h1>
		</div>
	)
}

export default Home