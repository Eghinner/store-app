import React from 'react'
import Banner from './Components/Banner'
import Search from './Components/Search'
import Products from './Components/Products'
import Sidebar from './Components/Sidebar'
// import SearchResults from './Components/SearchResults'
import './App.css'
// import { Link, Route, Routes, useSearchParams } from "react-router-dom"

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
