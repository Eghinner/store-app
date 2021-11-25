import React from 'react'
import Banner from './Components/Banner'
import Search from './Components/Search'
import Products from './Components/Products'
import Sidebar from './Components/Sidebar'
import './App.css'

import ProductsState from './Context/ProductsContext.js'

function App() {
  return (
    <React.Fragment>
    	<ProductsState>
    		<Banner/>
    		<Search/>
    		<div className="contenedor">
    			<Sidebar/>
    			<Products/>
    		</div>
		</ProductsState>
    </React.Fragment>
  )
}

export default App;
