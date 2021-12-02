import React from 'react'
import Home from './Components/Home'
import ProductDetail from './Components/ProductDetail'
import './App.css'
import { Route, Routes } from "react-router-dom"
import ProductsState from './Context/ProductsContext.js'

function App() {
  return (
    <React.Fragment>
    	<ProductsState>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path=':id' element={<ProductDetail/>}/>
            </Routes>
		</ProductsState>
    </React.Fragment>
  )
}

export default App;
