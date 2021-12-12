import React, { useContext } from 'react'
import styles from './styles.module.css'
import { ProductsContext } from '../../Context/ProductsContext.js'

const Sidebar = () => {

	const categorias = ['', 'electronics', 'jewelery', "men's clothing", "women's clothing"]

	const estrellas = ['', '5', '4', '3', '2']

	const {getCategories, category, setRate, rate} = useContext(ProductsContext)

	return (
		<aside>
			<h3 className={styles.h3}>Category</h3>
			<div className={styles.form_side}>
				{
					categorias.map(cate=>
						<div
							key={cate}
							className={`${styles.label} ${category===cate ? styles.mystyle : ''}`}
							onClick={()=>getCategories(cate)}
						>
							{cate===''?'All':cate}
						</div>
					)
				}
			</div>

			<h3 className={styles.h3}>Rating</h3>
			<div className={styles.form_side}>
				{
					estrellas.map(estr=>
						<div
							key={estr}
							className={`${styles.label} ${rate===estr ? styles.mystyle : ''}`}
							onClick={()=>setRate(estr)}
						>
							{estr===''?'All':`${estr} Stars`}
						</div>
					)
				}
			</div>
		</aside>
	)
}

export default Sidebar