import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../../Context/CartContext.js'
import './styles.css'

const Cart = () => {

	const {cartproducts, deleteToCart} = useContext(CartContext)

	const total = []

	cartproducts.forEach(pr=>{
		total.push(pr.price)
	})

	const valorfinal = total.length!==0 ? total.reduce( (a,b) => a + b ) : 0

	const Delete = id => {
		deleteToCart(id)
	}

	return (
		<React.Fragment>
			{
				cartproducts.length===0
				?
				<div className='lil'>
					<h2>Your cart is currently empty.</h2>
					<p>
						Before proceeding to checkout you must add some products
						to your shopping cart.
						<br/>
						You will find a lot of interesting products on our "Shop" page.
					</p>
					<Link to='../'>
						<button className='btn-cart'>continue shopping</button>
					</Link>
				</div>
				:
				<div className="container">
				  <ul className="responsive-table">
				    <li className="table-header">
				      <div className="col col-1">Product</div>
				      <div className="col col-2"></div>
				      <div className="col col-3"></div>
				      <div className="col col-4">Price</div>
				      <div className="col col-5">Quantity</div>
				      <div className="col col-6">Total</div>
				    </li>
				    	{
				    		cartproducts.map(cp=>
				    			<li className="table-row li" key={cp.id}>
				    				<div
				    					className="col col-1"
				    					data-label="Product"
				    				>
				    					<img
				    						className='img-card'
				    						src={cp.image}
				    						alt="see"
				    					/>
				    				</div>
				    				<div
				    					className="col col-2"
				    					data-label=""
				    				>{cp.title}</div>
				    				<div
				    					className="col col-3"
				    					data-label=""
				    					onClick={()=>Delete(cp.id)}
				    					>
				    					<i className="fas fa-trash"></i>			    				</div>
				    				<div
				    					className="col col-4"
				    					data-label="Price"
				    				>${cp.price}</div>
				    				<div
				    					className="col col-5"
				    					data-label="Quantity"
				    				>{cp.qty}</div>
				    				<div
				    					className="col col-6"
				    					data-label="Total"
				    				>${cp.price}</div>
				    			</li>
							)
				    	}
				  </ul>
				  <div>
				  	<Link to='../'>
				  		<button className='btn-cart'>continue shopping</button>
				  	</Link>
				  	<Link to='/'>
				  		<button className='btn-cart'>checkout</button>
				  	</Link>
				  	<span className='total'>Total ${valorfinal}</span>
				  </div>
				</div>
			}

		</React.Fragment>
	)
}

export default Cart