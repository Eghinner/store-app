import React from 'react'
import Home from './Components/Home'
import ProductDetail from './Components/ProductDetail'
import Cart from './Components/Cart'
import Banner from './Components/Banner'
import './App.css'
import { Route, Routes } from "react-router-dom"
import ProductsState from './Context/ProductsContext.js'
import CartState from './Context/CartContext.js'

function App() {
  return (
    <React.Fragment>
    	<ProductsState>
            <CartState>
                <Banner/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path=':id' element={<ProductDetail/>}/>
                    <Route path='cart' element={<Cart/>}/>
                </Routes>
            </CartState>
        </ProductsState>
    </React.Fragment>
  )
}

export default App;
