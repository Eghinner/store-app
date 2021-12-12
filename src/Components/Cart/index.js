import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {CartContext} from '../../Context/CartContext.js'
import styles from './styles.module.css'

const Cart = () => {

	const {
		cartproducts,
		deleteToCart,
		emptyCart,
		editProd
	} = useContext(CartContext)

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

	const addProduct = cp => {
		cp.qty+=1
		editProd(cp)
	}

	const subtracttProduct = cp => {
		if (cp.qty>1) cp.qty-=1
		editProd(cp)
	}

	return (
		<React.Fragment>
			{
				cartproducts.length===0
				?
				<div className={styles.lil}>
					<h2>Your cart is currently empty.</h2>
					<p>
						Before proceeding to checkout you must add some products
						to your shopping cart.
						<br/>
						You will find a lot of interesting products on our "Shop" page.
					</p>
					<Link to='../'>
						<button className={styles.btn_cart}>continue shopping</button>
					</Link>
				</div>
				:
				<div className={styles.container}>
				  <ul className={styles.responsive_table}>
				    <li className={styles.table_header}>
				      <div className={`${styles.col} ${styles.col_1}`}>Product</div>
				      <div className={`${styles.col} ${styles.col_2}`}></div>
				      <div className={`${styles.col} ${styles.col_3}`}></div>
				      <div className={`${styles.col} ${styles.col_4}`}>Price</div>
				      <div className={`${styles.col} ${styles.col_5}`}>Quantity</div>
				      <div className={`${styles.col} ${styles.col_6}`}>Total</div>
				    </li>
				    	{
				    		cartproducts.map(cp=>
				    			<li className={`${styles.table_row} ${styles.li}`} key={cp.id}>
				    				<div
				    					className={`${styles.col} ${styles.col_1}`}
				    					data-label="Product"
				    				>
				    					<img
				    						className={styles.img_card}
				    						src={cp.image}
				    						alt="see"
				    					/>
				    				</div>
				    				<div
				    					className={`${styles.col} ${styles.col_2}`}
				    					data-label=""
				    				>{cp.title}</div>
				    				<div
				    					className={`${styles.col} ${styles.col_3}`}
				    					data-label=""
				    					onClick={()=>Delete(cp.id)}
				    					>
				    					<i className="fas fa-trash"></i>			    				</div>
				    				<div
				    					className={`${styles.col} ${styles.col_4}`}
				    					data-label="Price"
				    				>${cp.price}</div>
				    				<div
				    					className={`${styles.col} ${styles.col_5}`}
				    					data-label="Quantity"
				    				>
				    				<button
				    					className={styles.quantity}
				    					onClick={()=>addProduct(cp)}
				    				>+
				    				</button>
				    				{cp.qty}
				    				<button
				    					className={styles.quantity}
				    					onClick={()=>subtracttProduct(cp)}
				    				>-
				    				</button>
				    				</div>
				    				<div
				    					className={`${styles.col} ${styles.col_6}`}
				    					data-label="Total"
				    				>
				    					${(cp.price*cp.qty).toFixed(2)}
				    				</div>
				    			</li>
							)
				    	}
				  </ul>
				  <div>
				  	<Link to='../'>
				  		<button className={styles.btn_cart}>continue shopping</button>
				  	</Link>
				  	<button
				  		disabled
				  		className={styles.btn_cart}
				  		>checkout
				  	</button>
				  	<button
				  		className={styles.btn_cart}
				  		onClick={empty}
				  		>empty
				  	</button>
				  	<span className={styles.total}>
				  		Total ${valorfinal.toFixed(2)}
				  	</span>
				  </div>
				</div>
			}

		</React.Fragment>
	)
}

export default Cart