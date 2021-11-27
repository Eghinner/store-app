import React, {useEffect, useState} from 'react'
import ClienteAxios from '../../Config/ClienteAxios'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner'
import './styles.css'


const ProductDetail = () => {

	const [state, setState] = useState([])

	const { rating } = state

	let {id} = useParams();
	console.log(state)

	useEffect(() => {
		const GetProduct = async () => {
		const respuesta = await ClienteAxios.get(`products/${id}`)
		setState(respuesta.data)
		}
		GetProduct()
	}, [])

	return (
		<React.Fragment>
			<div className='content'>
				{state.length===0
					?<Spinner/>
					:(<>
					<img className='img-product' src={state.image} alt="images"/>
					<div className="info">
						<h1 className='title-product'>{state.title}</h1>
						<p className='product-description'>{state.description}</p>
						<div>
							<div className='data'>
								<div className="rating">
									<span className="fa fa-star checked"></span>
									{rating.rate}
								</div>
								<div className="price">${state.price}</div>
							</div>
							<button type="button" disabled>Buy!</button>
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