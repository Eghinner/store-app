import React from 'react'
import styles from './styles.module.css'
import { useNavigate } from "react-router-dom"

const Product = ({product}) => {

	const {rating} = product

	let navigate = useNavigate()

	const goTo = () => {
		navigate(`${product.id}`)
	}

	return (
		<div className={styles.card}>
			<h3>{product.title}</h3>
			<img className={styles.img} src={product.image} alt="algo"/>
			<div className={styles.want}>
				<div className={styles.price_tag}>${product.price}</div>
				<div className={styles.rating}>
					<span className={`fa fa-star ${styles.checked}`}></span>
					{rating.rate}
				</div>
			</div>
			<button className={styles.btn} onClick={goTo}>Ver detalle =></button>
		</div>
	)
}

export default Product