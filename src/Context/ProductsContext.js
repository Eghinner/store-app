import {createContext, useReducer} from 'react'
import {
	GET_PRODUCTS,
	SELECT_CATEGORY,
	LOADING
} from '../Types'
import ClienteAxios from '../Config/ClienteAxios.js'

export const ProductsContext = createContext()

const ProductsState = ({children}) => {
	const initialState = {
		products: [],
		category: '',
		loading: false
	}

	const ProductsReducer = (state, action) => {
		switch(action.type) {
			case GET_PRODUCTS:
				return {
					...state,
					products: action.payload
				}
			case SELECT_CATEGORY:
				return {
					...state,
					category: action.payload
				}
			case LOADING:
				return {
					...state,
					loading: action.payload
				}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(ProductsReducer, initialState)

	const getProducts = async () => {
		if (state.category.trim()==='' || state.category.trim()==='all') {
			try {
				const result = await ClienteAxios.get('/products')
				dispatch({
					type: GET_PRODUCTS,
					payload: result.data
				})
			} catch (err) {
				console.log(err)
			}
		} else {
			try {
				const result = await ClienteAxios.get(`/products/category/${state.category}`)
				dispatch({
					type: GET_PRODUCTS,
					payload: result.data
				})
			} catch (err) {
				console.log(err)
			}
		}

	}

	const getCategories = category => {
		dispatch({
			type: SELECT_CATEGORY,
			payload: category
		})
	}

	const setLoading = (bool) => {
		dispatch({
			type: LOADING,
			payload: bool
		})
	}


	return (

		<ProductsContext.Provider
			value={{
				products: state.products,
				category: state.category,
				getProducts,
				getCategories
			}}
		>
		{children}
		</ProductsContext.Provider>
	)
}

export default ProductsState