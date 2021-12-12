import React, {useContext} from 'react'
import styles from './styles.module.css'
import {ProductsContext} from '../../Context/ProductsContext.js'
import {CartContext} from '../../Context/CartContext.js'
import { Link, useNavigate  } from 'react-router-dom'

const Home = () => {

	const navi = useNavigate()

	const {reseto} = useContext(ProductsContext)
	const {cartproducts} = useContext(CartContext)

	const qtyprod = cartproducts.map(cp => cp.qty)

	const click = () => {
		navi('/')
		reseto()
	}

	return (
		<React.Fragment>

			<Link to='cart'>
				<div className={styles.btn_card}>
					<div className={styles.container__docker}>
						{ cartproducts.length===0
							? 0
							: qtyprod.reduce( (a,b) => a + b)
						}
					</div>
				</div>
			</Link>
			<div className={styles.banner}>
				<h1 onClick={click} className={styles.header}>My Store</h1>
			</div>
		</React.Fragment>
	)
}

export default Home