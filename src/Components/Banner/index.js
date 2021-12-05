import React, {useContext} from 'react'
import './styles.css'
import {ProductsContext} from '../../Context/ProductsContext.js'
import { Link, useNavigate  } from 'react-router-dom'

const Home = () => {

	const navi = useNavigate()

	const {reseto} = useContext(ProductsContext)

	const click = () => {
		navi('/')
		reseto()
	}

	return (
		<React.Fragment>

			<Link to='cart'>
				<div className="btn-card"></div>
			</Link>
			<div className='banner'>
				<h1 onClick={click} className='header'>My Store</h1>
			</div>
		</React.Fragment>
	)
}

export default Home