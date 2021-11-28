import React, {useEffect, useState} from 'react'
import ClienteAxios from '../../Config/ClienteAxios'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner'
import './styles.css'
import { useSearchParams } from 'react-router-dom'

const ProductDetail = () => {

	const [setSearchParams] = useSearchParams()

	const [state, setState] = useState([])

	const { rating, title } = state

	let {id} = useParams();
	console.log(state)

	useEffect(() => {
		const GetProduct = async () => {
		const respuesta = await ClienteAxios.get(`products/${id}`)
		setState(respuesta.data)
		}
		GetProduct()
	// eslint-disable-next-line
	}, [])

	function FakeParams() {
		setSearchParams({title})
	}

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
							<button onClick={FakeParams} type="button">Buy!</button>
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