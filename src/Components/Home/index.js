import React from 'react'
import Banner from '../Banner'
import Search from '../Search'
import Products from '../Products'
import Sidebar from '../Sidebar'

const Home = () => {
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