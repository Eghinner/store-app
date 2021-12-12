import React, { useEffect, useState, useContext } from 'react'
import ClienteAxios from '../../Config/ClienteAxios'
import { useParams, useNavigate, Link } from 'react-router-dom'
import {CartContext} from '../../Context/CartContext.js'
import Details from '../Placeholder/Details'
import styles from './styles.module.css'
import Swal from 'sweetalert2'

const ProductDetail = () => {

	const navigate = useNavigate();

	const {addToCart} = useContext(CartContext)

	const [state, setState] = useState([])

	const { rating, title } = state

	let {id} = useParams();

	useEffect(() => {
		const GetProduct = async () => {
		const respuesta = await ClienteAxios.get(`products/${id}`)
		setState(respuesta.data)
		}
		GetProduct()
	}, [id])

	useEffect(() => {
		state.qty=1
	}, [state])

	const handleClick = () => {
		Swal.fire({
		  title: 'Success!',
		  text: 'This product has been add to your cart',
		  imageUrl: `${state.image}`,
		  imageHeight: 300,
		  imageAlt: 'Custom image',
		  showConfirmButton: false,
		  timer: 1200
		})
		addToCart(state)
	}
//
	return (
		<React.Fragment>
			<div className={styles.content}>
				<Link to='..'>
					<div className={styles.back}>
						<i className="fas fa-arrow-left"></i>
					</div>
				</Link>
				<div
					onClick={() => id!=='1' ? navigate(`../${--id}`):null}
					className={`${styles.left} ${styles.arrow}`}
					>
					<i className="fas fa-arrow-left"></i>
				</div>
				<div
					onClick={() => id!=='20' ? navigate(`../${++id}`): null}
					className={`${styles.right} ${styles.arrow}`}
					>
					<i className="fas fa-arrow-right"></i>
				</div>
				{
					state.length===0
					?<Details/>
					:
					(
					<>
					<img className={styles.img_product} src={state.image} alt="images"/>
					<div className={styles.info}>
						<h1 className={styles.title_product}>
							{title}
						</h1>
						<p className={styles.product_description}>
							{state.description}
						</p>
						<div>
							<div className={styles.data}>
								<div className={styles.rating}>
									<span className={`fa fa-star ${styles.checked}`}></span>
									{rating.rate}
								</div>
								<div className={styles.price_tag}>
									${state.price}
								</div>
							</div>
							<button
								className={styles.btn}
								type="button"
								onClick={handleClick}
							>
								Add to Card
							</button>
					</div>
					</div>
					</>
					)
				}
			</div>
		</React.Fragment>
	)
}

export default ProductDetail