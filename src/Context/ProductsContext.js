import {createContext, useReducer , useEffect} from 'react'
import {
	GET_PRODUCTS,
	SELECT_CATEGORY,
	SET_LOADING,
	SET_SEARCH,
	UPDATE_PRODUCTS
} from '../Types'
import ClienteAxios from '../Config/ClienteAxios.js'
import { useSearchParams } from 'react-router-dom'


export const ProductsContext = createContext()

const ProductsState = ({children}) => {

	const initialState = {
		products: [],
		productsfilter: [],
		category: '',
		loading: false,
		searchstring: null
	}

	const [searchParams] = useSearchParams()
	const q = searchParams.get('name')
	useEffect(() => {
		setSearch(q)
		// getProducts()
		updateProducts()
	// eslint-disable-next-line
	}, [searchParams])

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
			case SET_LOADING:
				return {
					...state,
					loading: action.payload
				}
			case SET_SEARCH:
				return {
					...state,
					searchstring: action.payload
				}
			case UPDATE_PRODUCTS:
				return {
					...state,
					productsfilter: state.searchstring === null ? []
					: state.products.filter(pro=>pro.title.includes(state.searchstring))
				}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(ProductsReducer, initialState)

	const getProducts = async () => {
		if (state.category.trim()==='' || state.category.trim()==='all') {
			try {
				setLoading(true)
				const result = await ClienteAxios.get(`/products`)
				dispatch({
					type: GET_PRODUCTS,
					payload: result.data
				})
			} catch (err) {
				console.log(err)
			} finally {
				setLoading(false)
			}
		}
		 else {
			setLoading(true)
			try {
				const result = await ClienteAxios.get(`/products/category/${state.category}`)
				dispatch({
					type: GET_PRODUCTS,
					payload: result.data
				})
			} catch (err) {
				console.log(err)
			} finally {
				setLoading(false)
			}
		}
	}

	const getCategories = category => {
		dispatch({
			type: SELECT_CATEGORY,
			payload: category
		})
	}

	const setLoading = bool => {
		dispatch({
			type: SET_LOADING,
			payload: bool
		})
	}

	const setSearch = value => {
		dispatch({
			type: SET_SEARCH,
			payload: value
		})
	}

	const updateProducts = value => {
		dispatch({
			type: UPDATE_PRODUCTS
		})
	}

	return (

		<ProductsContext.Provider
			value={{
				products: state.products,
				productsfilter: state.productsfilter,
				category: state.category,
				loading: state.loading,
				searchstring: state.searchstring,
				setLoading,
				getProducts,
				getCategories,
				setSearch,
				updateProducts
			}}
		>
		{children}
		</ProductsContext.Provider>
	)
}

export default ProductsState