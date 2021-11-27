import React from 'react'
import './styles.css'
import { Link } from "react-router-dom"

const index = () => {
	return (
		<div className='banner'>
			<Link to="/"><h1>My Store</h1></Link>
		</div>
	)
}

export default index