import React, {useContext} from 'react'
import './styles.css'
import { Link } from "react-router-dom"
import {ProductsContext} from '../../Context/ProductsContext.js'

const Home = () => {

	const {reseto} = useContext(ProductsContext)



	return (
		<div className='banner' onClick={()=>reseto()}>
			<Link to="/"><h1>My Store</h1></Link>
		</div>
	)
}

export default Home