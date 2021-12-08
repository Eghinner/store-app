import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../../Context/CartContext.js'
// import Swal from 'sweetalert2'
import './styles.css'

const Cart = () => {

	const {cartproducts, deleteToCart, emptyCart} = useContext(CartContext)

	const total = []

	cartproducts.forEach(pr=>{
		const totalproducto = pr.price * pr.qty
		total.push(totalproducto)
	})

	const valorfinal = total.length!==0 ? total.reduce( (a,b) => a + b ) : 0

	const Delete = id => {
		deleteToCart(id)
	}

	const empty = () => {
		emptyCart()
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
				    				>
				    				<input
				    					active
				    					type="number"
				    					value={cp.qty}
				    				/>
				    				{
				    				//<button>+</button>
				    				//<button>-</button>
				    				}
				    				</div>
				    				<div
				    					className="col col-6"
				    					data-label="Total"
				    				>${cp.price*cp.qty}</div>
				    			</li>
							)
				    	}
				  </ul>
				  <div>
				  	<Link to='../'>
				  		<button className='btn-cart'>continue shopping</button>
				  	</Link>
				  	<button
				  		disabled
				  		className='btn-cart'
				  		>checkout
				  	</button>
				  	<button
				  		className='btn-cart'
				  		onClick={empty}
				  		>empty
				  	</button>
				  	<span className='total'>Total ${valorfinal}</span>
				  </div>
				</div>
			}

		</React.Fragment>
	)
}

export default Cart